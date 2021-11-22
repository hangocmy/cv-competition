$(document).ready(function () {
  // Education
  var addBtn = $("#button-addon");
  var wrapper = $(".education");

  addBtn.on("click", (e) => {
    var fieldhtml = `<div class="education-form mb-3">
    <div class="mb-3">
    <label for="form-major" class="form-label">Major</label>
    <input id="form-major" type="text"  class="form-control" placeholder="Major" aria-label="Recipient's username">
</div>

<div class="mb-3">
    <label for="form-university" class="form-label">University</label>
    <input id="form-university" type="text"  class="form-control" placeholder="University name" aria-label="Recipient's username">
</div>

<div class="mb-3">
    <label for="form-school-time" class="form-label">Năm học</label>
    <div class="row">
        <div class="col-5">
            <input id="form-school-time-from" type="text"  class="form-control" placeholder="Thời gian bắt đầu" >
        </div>
        <div class="col-5">
            <input id="form-school-time-to" type="text"  class="form-control" placeholder="Thời gian kết thúc" >
        </div>
    </div>

</div>
<button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>
</div>

`;
    wrapper.append(fieldhtml);
  });

  wrapper.on("click", ".btn-remove", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
  });


  // Work experience

  var addBtn1 = $("#button-addon1");
  var wrapper1 = $(".work-experience");
  var fielhtml1= `<div class="work-experience-form mb-3">
  <div class="mb-3">
      <label for="form-work" class="form-label">Nơi làm việc</label>
      <input id="form-work" type="text"  class="form-control" placeholder="Nơi làm việc" aria-label="Recipient's username">
  </div>

<div class="mb-3">
<label for="form-job-already" class="form-label">Công việc đảm nhiệm</label>
<input id="fform-job-already" type="text"  class="form-control" placeholder="Công việc đảm nhiệm" aria-label="Recipient's username">
</div>

<div class="mb-3">
<label for="form-time-job" class="form-label">Thời gian làm việc</label>
<input id="form-time-job" type="text"  class="form-control" placeholder="Thời gian làm việc" aria-label="Recipient's username">
</div>

  <div class="mb-3">
      <label for="form-achieve" class="form-label">Thành tích</label>
      <input id="form-achieve" type="text"  class="form-control" placeholder="Thành tích" aria-label="Recipient's username">
  </div>
  <button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>
</div>`
  addBtn1.click((e)=>{
      wrapper1.append(fielhtml1);
  })

  wrapper1.on("click",".btn-remove",e=>{
      e.preventDefault();
      $(e.target).parent("div").remove();
  })
});

// Skill

var addBtn2= $("#button-addon2");
var wrapper2 = $(".skill");
var fielhtml2= `<div class="skill-form mb-3">
<div class="mb-3">
    <label for="form-work" class="form-label">Skill name</label>
    <input id="form-skillname" type="text" class="form-control" placeholder="Language" aria-label="Recipient's username">
</div>
<div class="mb-3">
    <label for="form-achieve" class="form-label">Skill Description</label>
    <input id="form-description" type="text" class="form-control" placeholder="Chinese, Korean" aria-label="Recipient's username">
</div>
<button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>
</div>`
addBtn2.click((e)=>{
    wrapper2.append(fielhtml2);
})

wrapper2.on("click",".btn-remove",e=>{
    e.preventDefault();
    $(e.target).parent("div").remove();
})

