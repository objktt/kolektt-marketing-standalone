// Image Swiper Component
class ImageSwiper {
  constructor(options = {}) {
    this.images = options.images
      ? options.images
          .split(",")
          .map((img) => img.trim())
          .filter((img) => img)
      : [];
    this.cardWidth = options.cardWidth || 256;
    this.cardHeight = options.cardHeight || 352;
    this.className = options.className || "";

    this.cardOrder = Array.from({ length: this.images.length }, (_, i) => i);
    this.cardRotations = Array.from(
      { length: this.images.length },
      () => (Math.random() - 0.5) * 4, // -2도에서 +2도 사이의 랜덤값
    );

    this.isSwiping = false;
    this.startX = 0;
    this.currentX = 0;
    this.animationFrameId = null;
    this.container = null;
  }

  render(container) {
    this.container =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    const swiperHTML = `
      <section class="image-swiper-container relative grid place-content-center select-none ${this.className}"
               style="width: ${this.cardWidth + 32}px; height: ${this.cardHeight + 32}px; touch-action: none; transform-style: preserve-3d;">
        <div class="card-stack" style="
          --card-perspective: 700px;
          --card-z-offset: 12px;
          --card-y-offset: 7px;
          --card-max-z-index: ${this.images.length};
          --card-swap-duration: 0.3s;
        ">
          ${this.renderCards()}
        </div>
      </section>
    `;

    this.container.innerHTML = swiperHTML;
    this.bindEvents();
    this.updatePositions();

    return this;
  }

  renderCards() {
    return this.cardOrder
      .map(
        (originalIndex, displayIndex) => `
      <article class="image-card absolute cursor-grab active:cursor-grabbing place-self-center border border-slate-400 rounded-lg shadow-lg overflow-hidden will-change-transform"
               data-original-index="${originalIndex}"
               data-display-index="${displayIndex}"
               style="
                 --i: ${displayIndex + 1};
                 z-index: ${this.images.length - displayIndex};
                 width: ${this.cardWidth}px;
                 height: ${this.cardHeight}px;
                 transform: perspective(var(--card-perspective))
                           translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                           translateY(calc(var(--card-y-offset) * var(--i)))
                           translateX(var(--swipe-x, 0px))
                           rotateY(var(--swipe-rotate, 0deg))
                           rotateZ(${this.cardRotations[originalIndex]}deg);
               ">
        <img src="${this.images[originalIndex]}" 
             alt="Swiper image ${originalIndex + 1}"
             width="${this.cardWidth}"
             height="${this.cardHeight}"
             class="w-full h-full object-cover select-none pointer-events-none"
             draggable="false"
             style="user-select: none;">
      </article>
    `,
      )
      .join("");
  }

  bindEvents() {
    const cardStack = this.container.querySelector(".card-stack");

    const handlePointerDown = (e) => {
      this.handleStart(e.clientX);
    };

    const handlePointerMove = (e) => {
      this.handleMove(e.clientX);
    };

    const handlePointerUp = (e) => {
      this.handleEnd();
    };

    cardStack.addEventListener("pointerdown", handlePointerDown);
    cardStack.addEventListener("pointermove", handlePointerMove);
    cardStack.addEventListener("pointerup", handlePointerUp);
    cardStack.addEventListener("pointerleave", handlePointerUp);

    // Store event handlers for cleanup
    this.eventHandlers = {
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
    };
  }

  handleStart(clientX) {
    if (this.isSwiping) return;
    this.isSwiping = true;
    this.startX = clientX;
    this.currentX = clientX;

    const card = this.getActiveCard();
    if (card) card.style.transition = "none";
  }

  handleMove(clientX) {
    if (!this.isSwiping) return;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.currentX = clientX;
      const deltaX = this.currentX - this.startX;
      this.applySwipeStyles(deltaX);

      if (Math.abs(deltaX) > 50) {
        this.handleEnd();
      }
    });
  }

  handleEnd() {
    if (!this.isSwiping) return;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    const deltaX = this.currentX - this.startX;
    const threshold = 50;
    const duration = this.getDurationFromCSS("--card-swap-duration");
    const card = this.getActiveCard();

    if (card) {
      card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;

      if (Math.abs(deltaX) > threshold) {
        const direction = Math.sign(deltaX);
        card.style.setProperty("--swipe-x", `${direction * 300}px`);
        card.style.setProperty("--swipe-rotate", `${direction * 20}deg`);

        setTimeout(() => {
          if (this.getActiveCard() === card) {
            card.style.setProperty("--swipe-rotate", `${-direction * 20}deg`);
          }
        }, duration * 0.5);

        setTimeout(() => {
          this.cardOrder = [...this.cardOrder.slice(1), this.cardOrder[0]];
          this.updateCards();
        }, duration);
      } else {
        this.applySwipeStyles(0);
      }
    }

    this.isSwiping = false;
    this.startX = 0;
    this.currentX = 0;
  }

  applySwipeStyles(deltaX) {
    const card = this.getActiveCard();
    if (!card) return;

    card.style.setProperty("--swipe-x", `${deltaX}px`);
    card.style.setProperty("--swipe-rotate", `${deltaX * 0.2}deg`);
    card.style.opacity = (
      1 -
      Math.min(Math.abs(deltaX) / 100, 1) * 0.75
    ).toString();
  }

  getActiveCard() {
    const cards = this.container.querySelectorAll(".image-card");
    return cards[0] || null;
  }

  updatePositions() {
    const cards = this.container.querySelectorAll(".image-card");
    cards.forEach((card, i) => {
      card.style.setProperty("--i", (i + 1).toString());
      card.style.setProperty("--swipe-x", "0px");
      card.style.setProperty("--swipe-rotate", "0deg");
      card.style.opacity = "1";
    });
  }

  updateCards() {
    const cardStack = this.container.querySelector(".card-stack");
    cardStack.innerHTML = this.renderCards();
    this.updatePositions();
  }

  getDurationFromCSS(variableName) {
    const value = getComputedStyle(this.container)
      ?.getPropertyValue(variableName)
      ?.trim();
    if (!value) return 300; // default 300ms
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 300;
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    if (this.container && this.eventHandlers) {
      const cardStack = this.container.querySelector(".card-stack");
      if (cardStack) {
        cardStack.removeEventListener(
          "pointerdown",
          this.eventHandlers.handlePointerDown,
        );
        cardStack.removeEventListener(
          "pointermove",
          this.eventHandlers.handlePointerMove,
        );
        cardStack.removeEventListener(
          "pointerup",
          this.eventHandlers.handlePointerUp,
        );
        cardStack.removeEventListener(
          "pointerleave",
          this.eventHandlers.handlePointerUp,
        );
      }
    }
  }
}

// Export for use
if (typeof module !== "undefined" && module.exports) {
  module.exports = ImageSwiper;
} else {
  window.ImageSwiper = ImageSwiper;
}
