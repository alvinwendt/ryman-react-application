import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../events/Events.css"

export const CommentEdit = () => {


    const [comment, updateComment] = useState({
        comment: "",
        userId: 0,
        eventId: 0

    })

    const { commentId } = useParams()
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/comments?id=${commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/comments/:commentId`")
            })
    }

    return <form className="editCommentForm">
        <h2 className="editCommentForm__title">Edit Comment</h2>
        <fieldset>
            <div className="edit-form-group">
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    placeholder="What I meant to say was..."
                    value={comment.comment}
                    onChange={
                        (evt) => {
                            const copy = { ...comment }
                            copy.comment = evt.target.value
                            updateComment(copy)
                        }
                    }>{comment.comment}</textarea>
            </div>
        </fieldset>

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-secondary">
            Save Edit
        </button>
    </form>
}