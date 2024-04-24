import React, { useContext } from "react";
import './Main.css'
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p></p>
            <img src={assets.server} alt="" />
        </div>
        <div className="main-container">

          {!showResult
          ?<>
            <div className="greet">
            <p><span>Hello Saya Jim.ai</span></p>
            <p>Silahkan tanya apapun</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Tanya tentang tugas sekolah / kuliah bisa?</p>
              <h3>Bisaa</h3>
              {/* <div className="image">Compas</div> */}
            </div>
            <div className="card">
              <p>Mau tanya soal coding juga bisa</p>
              {/* <div className="image">Bohlam</div> */}
            </div>
            <div className="card">
              <p>Tanya tentang teknologi apalagi</p>
              {/* <div className="image">Message</div> */}
            </div>
            <div className="card">
              <p>Tanya tentang apapun terserah</p>
              {/* <div className="image">Kode</div> */}
            </div>
          </div>
          </>
          :<div className="result">
            <div className="result-title">
              <img src={assets.server} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.logo} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
          </div>
          }

          

          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Ketik pertanyaan disini" />
              <div className="interaction">
                {input?<img onClick={()=>onSent()} src={assets.send} alt="" />: null}
              </div>
            </div>
            <p className="bottom-info">Gunakan dengan bijak</p>
          </div>
        </div>
    </div>
  )
}

export default Main