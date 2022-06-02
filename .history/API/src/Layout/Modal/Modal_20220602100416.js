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
              <img className="modal_img" src={props.id.thumbnailUrl != null? 
             props.id.thumbnailUrl.startsWith('http')?props.id.thumbnailUrl:'img/book.png':
             'img/book.png'} alt="" />
            
                <h2 id="title">제목:{props.id.titleStatement}</h2>
            
             
                <h2 id="author">작가:{props.id.author}</h2>
           
                <h2 id="publication">출판사:{props.id.publication}</h2>
           
                <h2 id="sametitle">
                  추천도서:
                  {props.id.similars === undefined
                    ? "추천도서가 없습니다"
                    : props.id.similars.length === 0
                    ? "추천도서가 없습니다"
                    : props.id.similars[0].titleStatement}
                </h2>
           
                <h2 id="Cstate">
                  대출정보:
                  {props.id.branchVolumes === undefined
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes.length === 0
                    ? "대출 정보가 없습니다"
                    : props.id.branchVolumes[0].cState}
                </h2>
    </div>
  </div>
  );
}
export default Modal;
