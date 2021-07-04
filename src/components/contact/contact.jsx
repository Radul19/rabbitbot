const Contact = () => {
    let moveBool = true
    const ContactMove = () => {
        const cageHide = window.document.getElementById('cageHide')
        const button = window.document.getElementById('buttonContact')
        const subtitleDiv = window.document.getElementById('subtitleDiv')
        // const arrow = window.document.getElementById('arrow')
        if (moveBool) {
            cageHide.style.marginLeft = '-101%'
            subtitleDiv.style.marginLeft = '-100%'
            button.textContent = 'Send message'
            moveBool = false
        } else {
            subtitleDiv.style.marginLeft = '0%'
            cageHide.style.marginLeft = '0%'
            button.textContent = 'Write message'
            moveBool = true
        }
    }
    return (
        <div className="contact">
            <div className="contact_subtitle">
                <div className="subtitle_div" id="subtitleDiv">
                    <h2>CONTACT</h2>
                    <h2 id="arrow" onClick={()=>{ContactMove()}} >&#8592;</h2>
                </div>
            </div>
            <div className="cage" >
                <div className="cageHide" id="cageHide">
                    <div className="insideCage">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quos quam dignissimos placeat nisi doloribus hic architecto excepturi facilis deserunt culpa rem dolorem maiores mollitia id itaque in blanditiis, saepe quibusdam pariatur dolore officiis, nam aperiam. Accusantium asperiores quis doloremque.</p>
                    </div>
                    <form action="">
                        <div className="form_div">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form_div">
                            <input type="email" name="" id="" placeholder="Email" />
                        </div>
                        <div className="form_div">
                            <textarea name="" id="" cols="10" rows="5" placeholder="Descripcion" ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <button id="buttonContact" onClick={() => { ContactMove() }} >Write Message -- </button>
        </div>
    );
};

export default Contact;
