import React, { useState } from 'react';
import StarsRating from '../starsRating/StarsRating';
import reviewStyles from '../../modules/reviewStyles.module.scss'
import { useDispatch } from 'react-redux'
import { addReview } from '../../redux/reducers/productsSlice';
import { NAME_CONSTANT, OVERALL_RATING, PUBLISH_CONSTANT, REVIEW_CONSTANT } from '../../common/constants';



const CreateComments = ({ rating, id, onClose, }) => {

    //--------------------------------
    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState(0)

    const addComment = async (e) => {
        e.preventDefault()
        if (text && userName) {
            const productReviewId = id;
            const newComment = {
                time: new Date().toISOString(),
                userName,
                text,
                rating: rating
            };
            await dispatch(addReview({ id: productReviewId, newReviewData: newComment }));
            onClose(false);
            setUserName('');
            setText('');
        }
    };

    //--------------------------------




    return (
        <form className={reviewStyles.formBlock} onSubmit={addComment} >
            <div className={reviewStyles.starsRating}>
                <h3 className={reviewStyles.OverallRating}>{OVERALL_RATING}</h3>
                <StarsRating count={5} rating={userRating} setUserRating={setUserRating} />

            </div>
            <div className={reviewStyles.box}>
                <p className={reviewStyles.name}>{NAME_CONSTANT}</p>
                <div className={reviewStyles.blockInput}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='name' />
                </div>

            </div>
            <div className={reviewStyles.box}>
                <p className={reviewStyles.text}>{REVIEW_CONSTANT}</p>
                <div className={reviewStyles.blockTextarea}>
                    <textarea type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='comment' />
                </div>

            </div>

            <button className={reviewStyles.publish} type='submit'>{PUBLISH_CONSTANT} </button>
        </form>
    )
}

export default CreateComments;