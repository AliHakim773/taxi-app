import './style.css'
const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="profile">
        <img src="" alt="" />
      </div>
      <div className="info">
        <div className="row">
          <div className="left">Name</div>
          <div className="right">Nadim</div>
        </div>
        <div className="row">
          <div className="left">Last name</div>
          <div className="right">Rifaii</div>
        </div>
        <div className="row">
          <div className="left">Email</div>
          <div className="right">nadimrifaii3@gmail.com</div>
        </div>
        <div className="row">
          <div className="left">Phone</div>
          <div className="right">+961 81 720 992</div>
        </div>
      </div>
    </div>
  )
}
export default SideBar