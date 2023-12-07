import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HelpTabComponent: React.FC = () => {
	const el = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				'Dynamic languages such as JavaScript are more difficult to compile than statically  typed ones. Since no concrete type <br/> information is available, traditional compilers need to emit generic code that can handle all possible type combinations at runtime. We present an alternative compilation technique for dynamically-typed languages that identifies frequently executed loop traces at run-time and then generates machine code on the fly that is specialized for the actual dynamic types occurring on each path through the loop.',
			], // Strings to display

			startDelay: 100,
			typeSpeed: 16,
			onComplete: (self: Typed) => {
				const cursor = self.cursor;
				if (cursor) {
					cursor.style.display = 'none';
				}
			},
		});
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div>
			<span className='text-[14px]' ref={el}></span>
		</div>
	);
};

export default HelpTabComponent;
