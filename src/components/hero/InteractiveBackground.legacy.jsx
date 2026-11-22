import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let hue = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const mouse = {
            x: undefined,
            y: undefined,
        }

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        }

        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1.5 - 0.75;
                this.speedY = Math.random() * 1.5 - 0.75;
                this.color = 'hsl(' + hue + ', 100%, 50%)';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.01; // Shrink slowly

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * 2; // Pushes away
                    this.y -= Math.sin(angle) * 2;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(167, 139, 250, 0.5)`; // Violet-400
                ctx.strokeStyle = `rgba(167, 139, 250, 0.5)`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.fillStyle = 'rgba(0,0,0,0.05)';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            handleParticles();
            hue += 0.5;
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(167, 139, 250, ${1 - distance / 100})`; // Fade out
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Keep particle count constant-ish or respawn?
                // Simple bounce logic is enough for now.
            }
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default InteractiveBackground;
