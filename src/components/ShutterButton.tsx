"use client";

interface ShutterButtonProps {
  onClick?: () => void;
}

export default function ShutterButton({ onClick }: ShutterButtonProps) {
  const handleClick = () => {
    console.log("Shutter clicked");
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="shutter-button-container">
      <button className="shutter-button" onClick={handleClick}>
        <div className="shutter-inner">
          <div className="shutter-ring"></div>
        </div>
      </button>
    </div>
  );
}
