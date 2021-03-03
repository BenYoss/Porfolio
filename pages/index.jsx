/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import About from '../components/App';

const Test2 = () => (
    <div>
        <h3>Hello Next with typescript!</h3>
        <Link href="/about">
            <a title="Click me!!">
                Click me!!
            </a>
        </Link>
        <About />
    </div>
);

export default Test2;
