import React, { forwardRef, useEffect, useRef } from 'react';

const Canvas = forwardRef((props, ref) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const cover = ref.current;

    // Pastikan ukuran canvas sesuai dengan layar
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fungsi untuk menggambar lingkaran
    const drawCircle = (x, y, size = 50) => {
      const grad = ctx.createRadialGradient(x, y, size / 2, x, y, size);
      grad.addColorStop(0, '#09E');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas sebelum menggambar ulang
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.closePath();
    };

    // Event listener untuk mousemove
    const handleMouseMove = (event) => {
      const x = event.clientX + window.scrollX; // Koordinat X dari mouse
      const y = event.clientY + window.scrollY; // Koordinat Y dari mouse
      drawCircle(x, y);
    };

    const handleMouseLeave = () => {
      window.scrollY === 0 ? drawCircle(0, 0, 500) : drawCircle(canvas.width, canvas.height, 500);
    };

    drawCircle(0, 0, 500);

    // Tambahkan event listener
    cover.addEventListener('mousemove', handleMouseMove);
    cover.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listener saat komponen unmount
    return () => {
      cover.removeEventListener('mousemove', handleMouseMove);
      cover.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas className='w-full h-screen -mt-xl' ref={canvasRef}></canvas>;
});
Canvas.displayName = 'Canvas';

export default Canvas;
