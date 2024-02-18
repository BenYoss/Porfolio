/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import dynamic from 'next/dynamic';

type Props = {
};
const AboutMe: React.FC<Props> = () => (
        <div>
            <h2>This will be the About me page</h2>
        </div>
);

export default dynamic(() => Promise.resolve(AboutMe), { ssr: false });
