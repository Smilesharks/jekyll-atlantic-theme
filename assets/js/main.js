
import Alpine from 'alpinejs';
window.Alpine = Alpine;
queueMicrotask(() => {
	Alpine.start()
});

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
	duration:1200,
	disable:"mobile"
	}
);
