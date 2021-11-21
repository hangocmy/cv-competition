$(document).ready(function () {
  // Education
  var addBtn = $("#button-addon");
  var wrapper = $(".education");

  addBtn.on("click", (e) => {
    var placeholder = $(e.target).data("placeholder");
    var fieldhtml = `<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="${placeholder}" aria-label="Recipient's username">
    <button class="btn btn-outline-secondary btn-remove" type="button"">Remove</button>
</div>`;
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
