const url = "/customers";
selectAll(); //전체조회
insert(); //등록버튼에 이벤트 지정
customersDelete();
customersupdate1();

//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `
            <tr data-id=${res[i].id}>
            <td><input type="checkbox" /></td>
            <td>${res[i].id}</td>
            <td>${res[i].name}</td>
            <td>${res[i].email}</td>
            <td>${res[i].phone}</td>
            <td${res[i].address}></td>
            <td><button id="delbtn">삭제</button>
                 <button id="btnsel">조회</button></td>
          </tr>`;
        list.innerHTML += tr;
      }
    });
}

//등록

function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: uname.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
}

function customersupdate1() {}
//삭제

function customersDelete() {
  //삭제버튼 이벤트
  list.addEventListener("click", function (ev) {
    if (ev.target.id == "btnsel") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      //단건조회
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id;
          uname.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
    } else if (ev.target.id == "delbtn") {
      //삭제
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}

//수정
function customersupdate1() {
  updbtn.addEventListener("click", function () {
    let data = {
      name: uname.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    let id = userid.value;
    console.log(id);
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result == true) {
          alert("수정완료");
          selectAll();
        } else {
          alert("수정실패");
        }
      })
      .catch(() => {
        alert("수정실패");
      });
  });
}

//단건조회
