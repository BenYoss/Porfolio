/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import * as React from 'react';
// import { IPost } from './index';

type Props = {
};

const AboutMe: React.FC<Props> = () => (
        <div>
            <h2>This will be the About me page</h2>
        </div>
);

export default AboutMe;

// type Props = {
//   savePost: (e: React.FormEvent, formData: IPost) => void
// }

// const AddPost: React.FC<Props> = ({ savePost }) => {
//   const [formData, setFormData] = React.useState<IPost>();

//   const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
//     setFormData({
//       ...formData,
//       [e.currentTarget.id]: e.currentTarget.value,
//     });
//   };

//   return (
//     <form className='Form' onSubmit={(e) => savePost(e, formData)}>
//       <div>
//         <div className='Form--field'>
//           <label htmlFor='name'>Title</label>
//           <input onChange={handleForm} type='text' id='title' />
//         </div>
//         <div className='Form--field'>
//           <label htmlFor='body'>Description</label>
//           <input onChange={handleForm} type='text' id='body' />
//         </div>
//       </div>
//       <button
//         className='Form__button'
//         disabled={formData === undefined}
//       >
//         Add Post
//       </button>
//     </form>
//   );
// };

// export default AddPost;
