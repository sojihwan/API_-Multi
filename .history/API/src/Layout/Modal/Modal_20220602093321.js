import React from "react";
import "./Modal.css";

function Modal(props) {
  function modal_close() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    let modal_overLay = document.getElementById("modal_overLay");
    modal_overLay.style.display = "none";
  }

  return (
    <div id="modal_overLay" onClick={modal_close}>
    <div id="modal">
      <div className="close" onClick={modal_close}>
        X
      </div>
     
        <colgroup>
          <col width="40%" />
          <col width="60%" />
        </colgroup>
        
              <img className="modal_img" src={props.id.thumbnailUrl != null? 
             props.id.thumbnailUrl.startsWith('http')?props.id.thumbnailUrl:'img/book.png':
             'img/book.png'} alt="" />
            
              <div className="hidden">
                <h2>{props.id.titleStatement}</h2>
              </div>
            
              <div className="hidden">
                <h2>{props.id.author}</h2>
              </div>
           
              <div className="hidden">
                <h2>{props.id.publication}</h2>
              </div>
           
              <div className="hidden">
                <h2>
                  {props.id.similars === undefined
                    ? "추천도서가 없습니다"
                    : props.id.similars === null
                    ? "추천도서가 없습니다"
                    : props.id.similars === []
                    ? "추천도서가 없습니다"
                    : props.id.similars.length === 0
                    ? "추천도서가 없습니다"
                    : props.id.similars[0].titleStatement}
                </h2>
              </div>
           
              <div className="hidden">
                <h2>
                  {props.id.branchVolumes === undefined
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes === null
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes === []
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes.length === 0
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes[0].cState}
                </h2>
              </div>
            
    </div>
  </div>
  );
}
export default Modal;
