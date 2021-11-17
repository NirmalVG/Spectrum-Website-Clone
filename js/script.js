$('.marquee').marquee({
	duration: 15000,
	gap: 500,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true
});

$(document).ready(function(){
    $("#staffingServices").validate({
        rules: {
            jv_company_name: {
                required:true,
                maxlength: 50
            },
            jv_website_url: {
                required:true,
                maxlength:50
            },
			jv_office_phone: {
                required:true,
                maxlength:50
            },
			jv_contact_person: {
                required:true,
                maxlength:50
            },
			jv_contact_person_designation: {
                required:true,
                maxlength:50
            },
			jv_contact_person_email: {
                required:true,
                maxlength:50
            },
			jv_contact_person_mobile: {
                required:true,
                maxlength:10
            },
			jv_company_address: {
                required:true,
                maxlength:50
            },
			jv_number_of_opengings: {
                required:true,
                maxlength:50
            },
			jv_job_description: {
                required:true,
                maxlength:50
            },
			jv_city: {
                required:true,
                maxlength:50
            },
			jv_state: {
                required:true,
                maxlength:50
            },
			jv_zip: {
                required:true,
                maxlength:50
            },
			jv_package_details: {
                required:true,
                maxlength:50
            },
            jv_job_title: {
                required:true,
            },
            verif_box: {
                required:true,
                maxlength:6
            },
        },
        messages: {
            jv_company_name: "This is a required field",
            jv_website_url: "The input value is not a correct URL",
            jv_office_phone: "The input value is incorrect",
            jv_contact_person: "This is a required field",
            jv_contact_person_designation: "This is a required field",
            jv_contact_person_email: "You have not given a correct e-mail address",
            jv_contact_person_mobile: "The input value is incorrect",
            jv_company_address: "This is a required field",
            jv_number_of_opengings: "The input value is incorrect",
            jv_job_description: "This is a required field",
            jv_zip: "This is a required field",
            jv_package_details: "This is a required field",
            jv_job_title: "The input value is incorrect",
            verif_box: "This is a required field",
        },
        submitHandler: function(form) {
            form.submit();
        }
    })
})

$(document).ready(function(){
    $("#addSkill").on("click",function(){
        $(".first_it_skill").append('<tbody id="add_it_skill"><tr><td  id="skillwidth">Skill</td><td id="versionwidth">Version</td><td id="lastwidth">Last Used</td><td id="expwidth">Experience</td><td></td></tr><tr class="duplicate_dis_row"><td><input type="text" name="skill_1" maxlength="40" class="newtextskill form-control"></td><td><input type="text" name="version_1"  maxlength="10" class="newtextskill form-control"></td><td><select name="lastUsed_sk_1"  tabindex="48" class="newtextskill form-control"><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select></td><td><table><tr><td ><select name="expYear_sk_1" tabindex="49" class="newtextskill form-control" ><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option></select></td><td class="option-text">Year(s) &nbsp;</td><td><select name="expMonth_sk_1" class="form-control" ><option value="0">Month</option>  <option value="01" >1</option>  <option value="02" >2</option>  <option value="03" >3</option>  <option value="04" >4</option>  <option value="05" >5</option>  <option value="06" >6</option>  <option value="07" >7</option>  <option value="08" >8</option>  <option value="09" >9</option>  <option value="10" >10</option>  <option value="11" >11</option>  <option value="12" >12</option></select></td><td class="option-text">Month(s)</td><td><button class="delete_skill" onclick="deleteSkill()">Delete</button></td></tr></tbody>');
    });
});

function deleteSkill() {
    var myobj = document.getElementById("add_it_skill");
    myobj.remove();
}

$(document).ready(function(){
    $("#add_certifications").on("click",function(){
        $(".technical-section").append('<div id="it-technical" class="technical-section form-section"><input type="hidden"  name="tot_cert_check" id="tot_cert_check" value="1"><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><label>Certification:</label><input type="text" name="cert_name_1" id="cert_name_1" class="form-control"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><input type="radio" name="crs_sts_1" id="crs_sts1_1"  value="0" >Course Completed&nbsp; &nbsp; <input type="radio" name="crs_sts_1" id="crs_sts2_1" value="1">Certified</div></div>        <div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><label>Name of Training Institute</label><input type="text" name="institution_name_1" id="institution_name_1"  class="form-control"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><label >Duration:</label><select name="startMonth_cert_1" id="startMonth_cert_1"><option value="" >Month</option>    <option value="Jan" >Jan</option>  <option value="Feb" >Feb</option>  <option value="Mar" >Mar</option>  <option value="Apr" >Apr</option>  <option value="May" >May</option>  <option value="Jun" >Jun</option>  <option value="Jul" >Jul</option>  <option value="Aug" >Aug</option>  <option value="Sept" >Sept</option>  <option value="Oct" >Oct</option>  <option value="Nov" >Nov</option>  <option value="Dec" >Dec</option>                </select> <select name="startYear_cert_1" id="startYear_cert_1"><option value="" >Year</option> <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select><span class="f11 fl p_4_Form">To</span><select name="endMonth_cert_1" id="endMonth_cert_1"> <option value="" >Month</option>   <option value="Jan" >Jan</option>  <option value="Feb" >Feb</option>  <option value="Mar" >Mar</option>  <option value="Apr" >Apr</option>  <option value="May" >May</option>  <option value="Jun" >Jun</option>  <option value="Jul" >Jul</option>  <option value="Aug" >Aug</option>  <option value="Sept" >Sept</option>  <option value="Oct" >Oct</option>  <option value="Nov" >Nov</option>  <option value="Dec" >Dec</option>                </select></span><span class="frErr ml8"> <select name="endYear_cert_1" id="endYear_cert_1"><option value="" >Year</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select> </div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><label>State</label><input type="text" name="state_cert_1" id="state_cert_1"  class="form-control"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><label>Country</label><input type="text" name="country_cert_1" id="country_cert_1"  class="form-control"></div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><button class="delete_certification" onclick="deleteCertification()">Delete</button></div></div>');
    });
});

function deleteCertification() {
    var myobj = document.getElementById("it-technical");
    myobj.remove();
}

$(document).ready(function(){
    $("#addPg").on("click",function(){
        $(".basic-edu").append('<div class="basic-edu" id="PgSection"">    <div class="row"><div class="col-md-6"><label ><span class="man-red">*</span>Post Graduation:</label><p><span><select id="pgcourseId" name="pgcourseId" class="form-control" data-validation="required"  tabindex="98">                         <option value="">Select</option><option value="MA">MA</option><option value="MSW">MSW</option><option value="MBA">MBA</option><option value="M Tech">M Tech</option><option value="MSc">MSc</option><option value="MCA">MCA</option><option value="M.com">M.com</option></select>                          </span></p></div>                        <div class="col-md-6"><p><input type="radio" name="pgcourseType" id="fTimeUG"  checked="checked"  value="0"   tabindex="99"/><label for="fTimeUG">Full Time</label> &nbsp; &nbsp;<input type="radio" name="pgcourseType" id="pTimeUG"  value="1"  tabindex="100"/><label for="pTimeUG">Part Time</label> &nbsp; &nbsp;<input type="radio" name="pgcourseType" id="corDisLearnUG"  value="2"  tabindex="101"/><label for="corDisLearnUG">Correspondence/Distance Learning</label></p></div></div><div class="row"><div class="col-md-6"><label for="pgspecId"><span class="man-red">*</span>Specialization:</label><p><span><select id="pgspecId" name="pgspecId"  class="form-control" data-validation="required"></select></p></div>                        <div class="col-md-6"><label for="pginstituteId"><span class="man-red">*</span>University/Institute:</label><input type="text" name="pginstitute" autocomplete="off" maxlength="100" class="form-control" data-validation="required"></div></div><div class="row" ><div class="col-md-6"><label for="pgyearOfCompletion"><span class="man-red">*</span>Year:</label><select id="pgYear" name="pgYear" class="form-control" data-validation="required"><option value="" >Year</option> <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select></div>                        <div class="col-md-6"><label for="pggradeId">Grading System:</label><select id="pggradeId"  name="pggradeId" class="form-control"><option value="" >Select</option><option value="1" >Scale 10 Grading System</option><option value="2" >Scale 4 Grading System</option><option value="3" >% Marks of 100 Maximum</option><option value="4" >Course Requires a Pass</option></select></div></div><div class="row"><div class="col-md-6"><label for="name">Marks:</label><p><input type="text" name="pgmarks" id="pgmarks" maxlength="3" class="form-control">                                </p></div><div class="col-md-6">                            <button type="button" onClick="addPhdSection();" id="addPhd";">Add PhD/Doctorate</button></div></div>    </div>');
    });
});

function addPhdSection() {
    var div = document.getElementById('phd-section');
    div.innerHTML += '<div class="phd-section" id="PhdSection">    <div class="row"><div class="col-md-6"><label><span class="man-red">*</span> Doctorate/PhD:</label><p><span><input type="text" id="drcourseId"  name="drcourseId"  class="form-control" data-validation="required"></span></p></div>                        <div class="col-md-6"><p ><input type="radio" name="drcourseType" id="fTimeUG"  checked="checked"  value="0"  /><label for="fTimeUG">Full Time</label> &nbsp; &nbsp;<input type="radio" name="drcourseType" id="pTimeUG"  value="1" /><label for="pTimeUG">Part Time</label> &nbsp; &nbsp;<input type="radio" name="drcourseType" id="corDisLearnUG"   value="2" /><label for="corDisLearnUG">Correspondence/Distance Learning</label></p></div></div><div class="row"><div class="col-md-6"><label for="drspecId"><span class="man-red">*</span>Specialization:</label><p><span><input type="text" id="drspecId"  name="drspecId" class="form-control" data-validation="required"></span></p></div>                        <div class="col-md-6"><label for="drinstituteId"><span class="man-red">*</span>University/Institute:</label><input type="text" name="drinstitute" autocomplete="off" maxlength="100" class="form-control" data-validation="required"></div></div><div class="row"><div class="col-md-6"><label for="dryearOfCompletion"><span class="man-red">*</span>Year:</label><select id="drYear" name="drYear" class="form-control" data-validation="required"><option value="" >Year</option> <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select></div>                        <div class="col-md-6"><label for="drgradeId">Grading System:</label><select id="drgradeId"  name="drgradeId" class="form-control"><option value="" >Select</option><option value="1" >Scale 10 Grading System</option><option value="2" >Scale 4 Grading System</option><option value="3" >% Marks of 100 Maximum</option><option value="4" >Course Requires a Pass</option></select></div></div><div class="row"><div class="col-md-6"><label for="name">Marks:</label><p><input type="text" name="drmarks" id="drmarks" class="form-control">                                </p></div><div class="col-md-6">                            <button type="button" id="addTenth";" onClick="addclass_tenth();">Add Class X</button></div></div>    </div>';
}

function addclass_tenth() {
    var div = document.getElementById('tenth-section');
    div.innerHTML += '<div class="container" id="Class_tenth">    <div class="row"><div class="col-md-6"><label for="schoolBoardId_10">Class X Board:</label><p><select name="schoolBoardId_10" id="schoolBoardId_10" data-validation="required"><option value="" >Select</option><optgroup class="optGrp" label="-----------All India-----------"></optgroup><option value="CBSE" >CBSE</option><option value="CISCE(ICSE/ISC)" >CISCE(ICSE/ISC)</option><option value="Diploma" >Diploma</option><option value="National Open School" >National Open School</option><optgroup class="optGrp" label="-----------State Boards----- ------"></optgroup><option value="Andhra Pradesh" >Andhra Pradesh</option><option value="Assam" >Assam</option><option value="Bihar" >Bihar</option><option value="Goa" >Goa</option><option value="Gujarat" >Gujarat</option><option value="9" >Haryana</option><option value="Haryana" >Himachal Pradesh</option><option value="Karnataka" >Karnataka</option><option value="Kerala" >Kerala</option><option value="Maharashtra" >Maharashtra</option><option value="Madhya Pradesh" >Madhya Pradesh</option><option value="Manipur" >Manipur</option><option value="Meghalaya" >Meghalaya</option><option value="Mizoram" >Mizoram</option><option value="Nagaland" >Nagaland</option><option value="Orissa" >Orissa</option><option value="Punjab" >Punjab</option><option value="Rajasthan" >Rajasthan</option><option value="Tamil Nadu" >Tamil Nadu</option><option value="Tripura" >Tripura</option><option value="Uttar Pradesh" >Uttar Pradesh</option><option value="West Bengal" >West Bengal</option><option value="Other" >Other</option></select></p></div>                    <div class="col-md-6"><label ><span class="man-red">*</span>Year:</label><select id="10_passYear" name="10_passYear" class="form-control" data-validation="required"><option value="" >Year</option> <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select></div></div><div class="row"><div class="col-md-6"><label for="schoolMediumId_10">Medium:</label><select name="schoolMediumId_10" id="schoolMediumId_10"><option value="" >Select</option><option value="Assamese / Asomiya" >Assamese / Asomiya </option><option value="Bengali / Bangla" >Bengali / Bangla</option><option value="English" >English</option><option value="Gujarati" >Gujarati</option><option value="Hindi" >Hindi</option><option value="Kannada" >Kannada</option><option value="Kashmiri" >Kashmiri</option><option value="Konkani" >Konkani</option><option value="Malayalam" >Malayalam</option><option value="Manipuri" >Manipuri</option><option value="Marathi" >Marathi</option><option value="Oriya" >Oriya</option><option value="Punjabi" >Punjabi</option><option value="Sanskrit" >Sanskrit</option><option value="Tamil" >Tamil</option><option value="Telugu" >Telugu</option><option value="Urdu" >Urdu</option><option value="Other" >Other</option></select></div>                        <div class="col-md-6"><label for="name">Marks:</label>            <input type="text" name="10_marks" id="10_marks" maxlength="3" class="form-control">                                </div></div><div class="row">    <div class="col-md-12">                            <button type="button" id="addTwelth" onClick="addclass_twelth();">Add Class XII</button></div></div>    </div>';
}

function addclass_twelth() {
    var div = document.getElementById('twelth-section');
    div.innerHTML += '<div class="container" id="Class_twelth"">    <div class="row"><div class="col-md-6"><label for="schoolBoardId_12">Class XII Board:</label><p><select  name="schoolBoardId_10" id="schoolBoardId_10"><option value="" >Select</option><optgroup class="optGrp" label="-----------All India-----------"></optgroup><option value="CBSE" >CBSE</option><option value="CISCE(ICSE/ISC)" >CISCE(ICSE/ISC)</option><option value="Diploma" >Diploma</option><option value="National Open School" >National Open School</option><optgroup class="optGrp" label="-----------State Boards----- ------"></optgroup><option value="Andhra Pradesh" >Andhra Pradesh</option><option value="Assam" >Assam</option><option value="Bihar" >Bihar</option><option value="Goa" >Goa</option><option value="Gujarat" >Gujarat</option><option value="9" >Haryana</option><option value="Haryana" >Himachal Pradesh</option><option value="Karnataka" >Karnataka</option><option value="Kerala" >Kerala</option><option value="Maharashtra" >Maharashtra</option><option value="Madhya Pradesh" >Madhya Pradesh</option><option value="Manipur" >Manipur</option><option value="Meghalaya" >Meghalaya</option><option value="Mizoram" >Mizoram</option><option value="Nagaland" >Nagaland</option><option value="Orissa" >Orissa</option><option value="Punjab" >Punjab</option><option value="Rajasthan" >Rajasthan</option><option value="Tamil Nadu" >Tamil Nadu</option><option value="Tripura" >Tripura</option><option value="Uttar Pradesh" >Uttar Pradesh</option><option value="West Bengal" >West Bengal</option><option value="Other" >Other</option></select></p></div>                        <div class="col-md-6"><label for="12yearOfCompletion"><span class="man-red">*</span>Year:</label><select id="12_passYear" name="12_passYear" class="form-control" data-validation="required"><option value="" >Year</option> <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option></select></div></div><div class="row"><div class="col-md-6"><label for="schoolMediumId_12">Medium:</label><select name="schoolMediumId_12" id="schoolMediumId_12"  class="form-control"><option value="" >Select</option><option value="Assamese / Asomiya" >Assamese / Asomiya </option><option value="Bengali / Bangla" >Bengali / Bangla</option><option value="English" >English</option><option value="Gujarati" >Gujarati</option><option value="Hindi" >Hindi</option><option value="Kannada" >Kannada</option><option value="Kashmiri" >Kashmiri</option><option value="Konkani" >Konkani</option><option value="Malayalam" >Malayalam</option><option value="Manipuri" >Manipuri</option><option value="Marathi" >Marathi</option><option value="Oriya" >Oriya</option><option value="Punjabi" >Punjabi</option><option value="Sanskrit" >Sanskrit</option><option value="Tamil" >Tamil</option><option value="Telugu" >Telugu</option><option value="Urdu" >Urdu</option><option value="Other" >Other</option></select></div>            <div class="col-md-6"><label for="name">Marks:</label>            <select  class="form-control" name="schoolPercentageId_12" id="schoolPercentageId_12"><option value="" >Select</option><option value="< 40%" >&lt; 40%</option><option value="40-44.9%" >40-44.9%</option><option value="45-49.9%" >45-49.9%</option><option value="50-54.9%" >50-54.9%</option><option value="55-59.9%" >55-59.9%</option><option value="60-64.9%" >60-64.9%</option><option value="65-69.9%" >65-69.9%</option><option value="70-74.9%" >70-74.9%</option><option value="75-79.9%" >75-79.9%</option><option value="80-84.9%" >80-84.9%</option><option value="85-89.9%" >85-89.9%</option><option value="90-94.9%" >90-94.9%</option>   <option value="95-99.9%" >95-99.9%</option><option value="100%" >100%</option></select>                               </div></div></div>';
}

function addLanguage() {
    document.getElementById("add_language_known").insertRow(-1).innerHTML = '<tr class="lang-del" id="lang_row_4"><td class="lan-known"><input type="text" maxlength="10" size="18" name="lang_1" data-validation="required" class="form-control">                       </td><td class="prof-level"><select  name="proficiencyId_1" data-validation="required" class="form-control"><option value="">Select</option><option value="1">Beginner</option><option value="2"selected="selected" >Proficient</option><option value="3">Expert</option></select></td><td class="read-lan"><input type="checkbox" value="1" class="chkRadio" name="canRead_1"  class="form-control" ></td><td class="write-lan"><input type="checkbox" value="1" class="chkRadio" name="canWrite_1" class="form-control" ></td><td class="speak-lan"><input type="checkbox" value="1" class="chkRadio" name="canSpeak_1" class="form-control"  ></td><td><button type="button" name="delete_lang" class="delete_lang_4" id="delete_lang_4" onClick="delLang();"><b>Delete</b></button></td></tr>';
}

function deleteSkill() {
    var myobj = document.getElementById("add_it_skill");
    myobj.remove();
}

$(document).ready(function(){ 
    $('#delete_lang_2').click(function(){ 
        $('#lang_row_2').remove(); 
    });
});

$(document).ready(function(){ 
    $('#delete_lang_3').click(function(){ 
        $('#lang_row_3').remove(); 
    });
});

function delLang() {
    document.getElementById("add_language_known").deleteRow(4);
}

$('#configreset').click(function() {
    var validator = $("#staffingServices").validate();
    validator.resetForm();
});

$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            pd_first_name: {
                required:true,
                maxlength: 50
            },
			pd_last_name: {
                required:true,
                maxlength:50
            },
			pd_dob: {
                required:true,
            },
			pd_email_id: {
                required:true,
                maxlength:20,
                email:true
            },
			pd_mobile: {
                required:true,
                maxlength:10
            },
			add_temp_house_name: {
                required:true,
                maxlength:50
            },
			add_per_house_name: {
                required:true,
                maxlength:50
            },
			pd_resume: {
                required:true,
            },
			resume_headline: {
                required:true,
                maxlength:50
            },
			exp_current_location: {
                required:true,
                maxlength:50
            },
			exp_prefered_location: {
                required:true,
                maxlength:50
            },
            chk_job_type_per: {
                required:true,
            },
            chk_job_type_temp: {
                required:true,
            },
            chk_job_type_both: {
                required:true,
            },
            chk_emp_type_full: {
                required:true,
            },
            chk_emp_type_part: {
                required:true,
            },
            chk_emp_type_flexible: {
                required:true,
            },
            jb_availability_to_join: {
                required:true,
            },
            chk_preferred_shift_day: {
                required:true,
            },
            chk_preferred_shift_night: {
                required:true,
            },
            chk_preferred_shift_flexible: {
                required:true,
            },
            jb_expected_anual_salary_lk: {
                required:true,
            },
            ugcourseId: {
                required:true,
            },
            ugspecId: {
                required:true,
                maxlength:50
            },
            uginstitute: {
                required:true,
                maxlength:50
            },
            ugYear: {
                required:true,
            },
            sub_id: {
                required:true,
                maxlength:50
            },
            add_language_known: {
                required:true,
            },
            verif_box: {
                required:true,
                maxlength:6
            },
        },
        messages: {
            pd_first_name: "This is a required field",
            pd_last_name: "This is a required field",
            pd_dob: "This is a required field",
            pd_email_id: "You have not given a correct e-mail address",
            pd_mobile: "The input value is incorrect",
            add_temp_house_name: "This is a required field",
            add_per_house_name: "This is a required field",
            pd_resume: "This is a required field",
            resume_headline: "This is a required field",
            exp_current_location: "This is a required field",
            exp_prefered_location: "This is a required field",
            jb_availability_to_join: "This is a required field",
            ugcourseId: "This is a required field",
            ugspecId: "This is a required field",
            uginstitute: "This is a required field",
            ugYear: "This is a required field",
            sub_id: "This is a required field",
            verif_box: "This is a required field",
        },
        submitHandler: function(form) {
            form.submit();
        }
    })
})

