// iPhone 15 Pro Mockup Component
class iPhone15Pro {
  constructor(options = {}) {
    this.width = options.width || 300;
    this.height = options.height || 600;
    this.className = options.className || "";
  }

  render(container) {
    const iPhoneHTML = `
      <div class="iphone-15-pro-container relative ${this.className}" style="width: ${this.width}px; height: ${this.height}px;">
        <div class="iphone-15-pro-body relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem]" 
             style="width: ${this.width}px; height: ${this.height}px;">
          
          <!-- Side buttons -->
          <div class="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          
          <!-- Screen -->
          <div class="iphone-screen rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
            <!-- Camera preview background - transparent -->
            <div class="w-full h-full bg-black/20"></div>
            
            <!-- Shutter button only -->
            <div class="absolute bottom-0 left-0 right-0 pb-10">
              <div class="flex justify-center items-center px-8 mb-8">
                <button class="shutter-btn w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                  <div class="w-[70px] h-[70px] bg-black rounded-full flex items-center justify-center">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              
              <!-- Home indicator -->
              <div class="flex justify-center">
                <div class="w-36 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (typeof container === "string") {
      document.querySelector(container).innerHTML = iPhoneHTML;
    } else if (container instanceof HTMLElement) {
      container.innerHTML = iPhoneHTML;
    }

    return this;
  }

  // Get the screen element for overlaying content
  getScreenElement(container) {
    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;
    return containerEl.querySelector(".iphone-screen");
  }
}

// Export for use
if (typeof module !== "undefined" && module.exports) {
  module.exports = iPhone15Pro;
} else {
  window.iPhone15Pro = iPhone15Pro;
}
