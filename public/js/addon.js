$(document).ready(function() {
    // Education
    edu_id = 2
    var addBtn = $("#button-addon");
    var wrapper = $(".education");

    addBtn.on("click", (e) => {
        wrapper.append(`<div class="education-form mb-3">
    <div class="mb-3">
            <label for="form-major" class="form-label">Major</label>
            <input name="form-major` + edu_id + `" id="form-major` + edu_id + `" type="text"  class="form-control" placeholder="Major" aria-label="Recipient's username">
        </div>

        <div class="mb-3">
            <label for="form-university" class="form-label">University</label>
            <input name="form-university` + edu_id + `" id="form-university` + edu_id + `" type="text"  class="form-control" placeholder="University name" aria-label="Recipient's username">
        </div>
        
        <div class="mb-3">
            <label for="form-school-time" class="form-label">Year</label>
            <div class="row">
                <div class="col-5">
                    <input name="form-school-time-from` + edu_id + `" id="form-school-time-from` + edu_id + `" type="text"  class="form-control" placeholder="Start" >
                </div>
                <div class="col-5">
                    <input name="form-school-time-to` + edu_id + `" id="form-school-time-to` + edu_id + `" type="text"  class="form-control" placeholder="End" >
                </div>
            </div>

        </div>
        <button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>
        </div>

        `);
        edu_id++
    });

    wrapper.on("click", ".btn-remove", function(e) {
        e.preventDefault();
        $(this).parent("div").remove();
    });

    ///////////////////////////////////////////////////////////////////////////////
    // Work experience
    we_id = 2
    var addBtn1 = $("#button-addon1");
    var wrapper1 = $(".work-experience");
    addBtn1.click((e) => {
        wrapper1.append(`<div class="work-experience mb-3">
      <div class="work-experience-form mb-3">
          <div class="mb-3">
              <label for="form-work" class="form-label">Company</label>
              <input id="form-work` + we_id + `" type="text"  class="form-control" placeholder="Enter company name" aria-label="Recipient's username">
          </div>

          <div class="mb-3">
              <label for="form-job-already" class="form-label">Role</label>
              <input id="form-job-already` + we_id + `" type="text"  class="form-control" placeholder="Enter your role" aria-label="Recipient's username">
          </div>
          
  

          <div class="mb-3">
              <label for="form-time-job" class="form-label">Year</label>
              <div class="row">
                  <div class="col-5">
                      <input id="form-time-job-from` + we_id + `" type="text"  class="form-control" placeholder="Start" >
                  </div>
                  <div class="col-5">
                      <input id="form-time-job-to` + we_id + `" type="text"  class="form-control" placeholder="End" >
                  </div>
              </div>

          </div>

          <div class="mb-3">
              <label for="form-achieve" class="form-label">Achievement</label>
              <input id="form-achieve` + we_id + `" type="text"  class="form-control" placeholder="Enter your achievement" aria-label="Recipient's username">
          </div>
          <button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>

      </div>

  </div>`);
        we_id++
    })

    wrapper1.on("click", ".btn-remove", e => {
        e.preventDefault();
        $(e.target).parent("div").remove();
    })


    ///////////////////////////////////////////////////////////////////////////////
    // Skill

    var addBtn2 = $("#button-addon2");
    var wrapper2 = $(".skill");


    skill_id = 2

    addBtn2.click((e) => {

        wrapper2.append(`<div class="skill-form mb-3">
    <div class="mb-3">
        <label for="form-work" class="form-label">Skill name</label>
        <input name="form-skillname` + skill_id + `"  id="form-skillname` + skill_id + `" type="text" class="form-control" placeholder="Language" aria-label="Recipient's username">
    </div>
    <div class="mb-3">
        <label for="form-achieve" class="form-label">Skill Description</label>
        <input name="form-description` + skill_id + `" id="form-description` + skill_id + `" type="text" class="form-control" placeholder="Chinese, Korean" aria-label="Recipient's username">
    </div>
    <button class="btn btn-outline-secondary btn-lg btn-block btn-remove" type="button">Remove</button>
    </div>`);
        skill_id++;

    })

    wrapper2.on("click", ".btn-remove", e => {
        e.preventDefault();
        $(e.target).parent("div").remove();
    })


});