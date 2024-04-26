import React, { useState } from 'react';
import reviewStyles from '../../modules/reviewStyles.module.scss'
import CustomModal from '../CustomModal/CustomModal';
import StarsRating from '../starsRating/StarsRating';
import cm from '../../modules/CustomModal.module.scss'
import { SHARE_YOUR_THOUGHTS, WRITE_A_REVIEW } from '../../common/constants';

const CommentsList = ({ rating, comments = [], id }) => {
    const [isOpen, setOpen] = useState(false);
    const [commentList, setCommentList] = useState(comments);
    const addComment = (newComment) => {
        setCommentList([...commentList, newComment]);
    };

    return (
        <div className={reviewStyles.wrapper}>
            <div className={reviewStyles.heading}>
                <h2 className={reviewStyles.title}>{WRITE_A_REVIEW}</h2>
                <h3 className={reviewStyles.subTitle}>{SHARE_YOUR_THOUGHTS}</h3>
            </div>
            <button className={cm.buttonOpen} onClick={() => setOpen(true)}>{WRITE_A_REVIEW}</button>
            <CustomModal
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                comments={commentList}
                rating={rating}
                id={id}
                addComment={addComment}
            />
            <ul className={reviewStyles.reviewList}>
                {commentList.map((comment) => (
                    <li key={comment.time} className={reviewStyles.reviewItem}>
                        <div className={reviewStyles.reviewName}>{comment.userName}<span className={reviewStyles.time}>{String(comment.time)}</span> </div>
                        <StarsRating rating={rating} count={5} />
                        {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
