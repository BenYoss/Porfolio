/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
import { IPost } from './index';

type Props = {
    form: (e: React.FormEvent, formData: IPost) => void,
};

const Navba: React.FC<Props> = ({ form }) => {
  const [data, setData] = React.useState([]);

  return (
        <div>
            <h2>This will be the navbar</h2>
        </div>
  );
};

export default Navba;
