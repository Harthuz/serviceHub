import './UserCard.css'

function UserCard() {
    return (
        <div className="card">
            <div className="card-header">
                <h1>USERS</h1>
                <button><img src="src/assets/image-removebg-preview.png" alt="" /></button>
            </div>
            <div className="user">
                <img src="src/assets/Sample_User_Icon.png" alt="" className="img-user" />
                <div className="user-info">
                    <h3 className="user-id">#1</h3>
                    <h2 className="user-name">Hernandes</h2>
                </div>
            </div>
        </div>
    )
}

export default UserCard