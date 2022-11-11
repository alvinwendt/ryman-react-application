import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const CommentsForm = () => {

    const navigate = useNavigate()

    const [comments, setComments] = useState([])

    useEffect(
        () => {
          const fetchData = async () => {
              const response = await fetch(`http://localhost:8088/comments`)
              const commentArray = await response.json()
              setComments(commentArray)
          } 
          fetchData()
          },
          [] // When this array is empty, you are observing initial component state
      ) 

    const localRymanUser = localStorage.getItem("ryman_user")
    const rymanUserObject = JSON.parse(localRymanUser)

    const localEventId = localStorage.getItem("ryman_event")
    const rymanEventId = JSON.parse(localEventId)

    const [newComments, update] = useState({
        comment: "",
        
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button!")

        // The following code creates the object to be saved to the API


        const commentToSendToAPI = {
            userId: rymanUserObject.id,
            eventId: rymanEventId.id,
            comment: newComments.comment
        }

        // TODO: Perform the fetch() to POST the object to the API

        const sendData = async () => {
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(commentToSendToAPI)
            }
            const response = await fetch (`http://localhost:8088/comments`, options)
            await response.json()
            navigate("/comments")
          }
          sendData()
    }

    return (
        <form className="commentForm">
            <h2 className="cmmentForm__title">Comments</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">New Comment</label>
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="Tell us what you think!"
                        value={newComments.comment}
                        onChange={
                            (evt) => {
                                const copy = {...newComments}
                                copy.comment = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
        
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Comment
            </button>
        </form>
    )
}