webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<script>console.log(5 + 6);</script>\r\n<!-- <div class=\"main\">\r\n    <div class=\"card card-body bg-light\">Admin Module</div>\r\n    <div *ngFor='let item of videoList'>\r\n     <span *ngIf=\"item.embed\">{{item.rule}}</span>\r\n      <div style=\"height:20%;margin:0%\" *ngIf=\"item.embed\">\r\n        <iframe [src]='getEmbedUrl(item)' allowfullscreen class=\"col-sm-4\"></iframe>\r\n        <img src=\"assets/pdf.jpg\" style=\"height:25px;width:25px\" class=\"smallStatusImage\" alt=\"Excel Icon for View Accrual Excel Report\"\r\n        />\r\n        <a href=\"{{item.URL}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the pdf file</a>\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"item.isActive\" (click)=\"CheckboxCheck(item.rule,$event)\">Make It Active</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n<div class=\"main\">\r\n  <!-- <div class=\"form-group\">\r\n      <label for=\"usr\">Course Name:</label>\r\n      <input type=\"text\" [(ngModel)]=\"sName\" class=\"form-control\" id=\"usr\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Youtube Embed:</label>\r\n      <input type=\"text\"  [(ngModel)]=\"sEmbed\" class=\"form-control\" id=\"pwd\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lnk\">PDF Link:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lnk\" [(ngModel)]=\"sLink\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"que\">Question:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"que\" [(ngModel)]=\"sQuestion\">\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"publishIt()\">Publish</button> -->\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"QuizForm\" >Upload Quiz</button>\r\n\r\n    <h3 class=\"text-center\">Publish Course</h3>\r\n  <form [formGroup]=\"videoForm\">\r\n    <div class=\"form\">\r\n      <label for=\"usr\">Course Name: </label>\r\n      <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" required>\r\n      <div *ngIf=\"videoForm.controls['name'].errors && !videoForm.controls['name'].pristine\" class=\"error-msg\">\r\n        <div [hidden]=\"!videoForm.controls['name'].errors.required\">Name is required.</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form\">\r\n      <label for=\"usr\">ownership: </label>\r\n      <input type=\"text\" formControlName=\"ownership\" class=\"form-control\" id=\"ownership\" required>\r\n      <div *ngIf=\"videoForm.controls['ownership'].errors && !videoForm.controls['ownership'].pristine\" class=\"error-msg\">\r\n        <div [hidden]=\"!videoForm.controls['ownership'].errors.required\">Name is required.</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Document Link1: </label>\r\n      <input type=\"text\" formControlName=\"URL\" class=\"form-control\" id=\"URL\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Document Link2: </label>\r\n      <input type=\"text\" formControlName=\"URL1\" class=\"form-control\" id=\"URL1\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Document Link3: </label>\r\n      <input type=\"text\" formControlName=\"URL2\" class=\"form-control\" id=\"URL2\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Video Embed1: </label>\r\n      <input type=\"text\" formControlName=\"embed\" class=\"form-control-file\" id=\"embed\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Video Embed2: </label>\r\n      <input type=\"text\" formControlName=\"embed1\" class=\"form-control-file\" id=\"embed1\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Video Embed3: </label>\r\n      <input type=\"text\" formControlName=\"embed2\" class=\"form-control-file\" id=\"embed2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Choose file to Upload </label>\r\n      <!--<input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\".pdf,.docx\" required>-->\r\n      <input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"upload($event)\" accept=\".pdf,.docx\" required >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\r\n      File uploaded: <a [href]=\"downloadSrc\">{{downloadSrc}}</a>\r\n  </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Choose file to Upload </label>\r\n      <!--<input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\".pdf,.docx\" required>-->\r\n      <input type=\"file\" multiple formControlName=\"file1\" class=\"form-control\" id=\"file1\" (change)=\"upload1($event)\" accept=\".pdf,.docx\" required >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress1 | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress1 | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <div *ngIf=\"downloadURL1 | async; let downloadSrc1\" class=\"alert alert-info\" role=\"alert\">\r\n      File uploaded: <a [href]=\"downloadSrc1\">{{downloadSrc1}}</a>\r\n  </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Choose file to Upload </label>\r\n      <!--<input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\".pdf,.docx\" required>-->\r\n      <input type=\"file\" multiple formControlName=\"file2\" class=\"form-control\" id=\"file2\" (change)=\"upload2($event)\" accept=\".pdf,.docx\" required >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress2 | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress2 | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <div *ngIf=\"downloadURL2 | async; let downloadSrc2\" class=\"alert alert-info\" role=\"alert\">\r\n      File uploaded: <a [href]=\"downloadSrc2\">{{downloadSrc2}}</a>\r\n  </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question: </label>\r\n      <input type=\"text\" formControlName=\"question1\" class=\"form-control\" id=\"question1\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta1\" class=\"form-control\" id=\"Opta1\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb1\" class=\"form-control\" id=\"Optb1\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc1\" class=\"form-control\" id=\"Optc1\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd1\" class=\"form-control\" id=\"Optd1\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer1\" class=\"form-control\" id=\"answer1\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 2: </label>\r\n      <input type=\"text\" formControlName=\"question2\" class=\"form-control\" id=\"question2\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta2\" class=\"form-control\" id=\"Opta2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb2\" class=\"form-control\" id=\"Optb2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc2\" class=\"form-control\" id=\"Optc2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd2\" class=\"form-control\" id=\"Optd2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer2\" class=\"form-control\" id=\"answer2\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 3: </label>\r\n      <input type=\"text\" formControlName=\"question3\" class=\"form-control\" id=\"question3\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta3\" class=\"form-control\" id=\"Opta3\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb3\" class=\"form-control\" id=\"Optb3\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc3\" class=\"form-control\" id=\"Optc3\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd3\" class=\"form-control\" id=\"Optd3\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer3\" class=\"form-control\" id=\"answer3\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 4: </label>\r\n      <input type=\"text\" formControlName=\"question4\" class=\"form-control\" id=\"question4\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta4\" class=\"form-control\" id=\"Opta4\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb4\" class=\"form-control\" id=\"Optb4\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc4\" class=\"form-control\" id=\"Optc4\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd4\" class=\"form-control\" id=\"Optd4\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer4\" class=\"form-control\" id=\"answer4\" required>\r\n    </div> \r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 5: </label>\r\n      <input type=\"text\" formControlName=\"question5\" class=\"form-control\" id=\"question5\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta5\" class=\"form-control\" id=\"Opta5\" required>\r\n    </div>\r\n  \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb5\" class=\"form-control\" id=\"Optb5\" required>\r\n    </div>\r\n  \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc5\" class=\"form-control\" id=\"Optc5\" required>\r\n    </div>\r\n  \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd5\" class=\"form-control\" id=\"Optd5\" required>\r\n    </div>\r\n  \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer5\" class=\"form-control\" id=\"answer5\" required>\r\n    </div> \r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 6: </label>\r\n      <input type=\"text\" formControlName=\"question6\" class=\"form-control\" id=\"question6\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta6\" class=\"form-control\" id=\"Opta6\" required>\r\n    </div>\r\n    \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb6\" class=\"form-control\" id=\"Optb6\" required>\r\n    </div>\r\n    \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc6\" class=\"form-control\" id=\"Optc6\" required>\r\n    </div>\r\n    \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd6\" class=\"form-control\" id=\"Optd6\" required>\r\n    </div>\r\n    \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer6\" class=\"form-control\" id=\"answer6\" required>\r\n    </div> \r\n        \r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 7: </label>\r\n      <input type=\"text\" formControlName=\"question7\" class=\"form-control\" id=\"question7\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta7\" class=\"form-control\" id=\"Opta7\" required>\r\n    </div>\r\n      \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb7\" class=\"form-control\" id=\"Optb7\" required>\r\n    </div>\r\n      \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc7\" class=\"form-control\" id=\"Optc7\" required>\r\n    </div>\r\n      \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd7\" class=\"form-control\" id=\"Optd7\" required>\r\n    </div>\r\n      \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer7\" class=\"form-control\" id=\"answer7\" required>\r\n    </div> \r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 8: </label>\r\n      <input type=\"text\" formControlName=\"question8\" class=\"form-control\" id=\"question8\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta8\" class=\"form-control\" id=\"Opta8\" required>\r\n    </div>\r\n        \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb8\" class=\"form-control\" id=\"Optb8\" required>\r\n    </div>\r\n        \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc8\" class=\"form-control\" id=\"Optc8\" required>\r\n    </div>\r\n        \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd8\" class=\"form-control\" id=\"Optd8\" required>\r\n    </div>\r\n        \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer8\" class=\"form-control\" id=\"answer8\" required>\r\n    </div> \r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 9: </label>\r\n      <input type=\"text\" formControlName=\"question9\" class=\"form-control\" id=\"question9\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta9\" class=\"form-control\" id=\"Opta9\" required>\r\n    </div>\r\n          \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb9\" class=\"form-control\" id=\"Optb9\" required>\r\n    </div>\r\n          \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc9\" class=\"form-control\" id=\"Optc9\" required>\r\n    </div>\r\n          \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd9\" class=\"form-control\" id=\"Optd9\" required>\r\n    </div>\r\n          \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer9\" class=\"form-control\" id=\"answer9\" required>\r\n    </div> \r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Question 10: </label>\r\n      <input type=\"text\" formControlName=\"question10\" class=\"form-control\" id=\"question10\" required>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option A: </label>\r\n      <input type=\"text\" formControlName=\"Opta10\" class=\"form-control\" id=\"Opta10\" required>\r\n    </div>\r\n            \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option B: </label>\r\n      <input type=\"text\" formControlName=\"Optb10\" class=\"form-control\" id=\"Optb10\" required>\r\n    </div>\r\n            \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option C: </label>\r\n      <input type=\"text\" formControlName=\"Optc10\" class=\"form-control\" id=\"Optc10\" required>\r\n    </div>\r\n            \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Option D: </label>\r\n      <input type=\"text\" formControlName=\"Optd10\" class=\"form-control\" id=\"Optd10\" required>\r\n    </div>\r\n            \r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"usr\">Correct Answer: </label>\r\n      <input type=\"text\" formControlName=\"answer10\" class=\"form-control\" id=\"answer10\" required>\r\n    </div> \r\n      \r\n    <button type=\"submit\"  class=\"btn btn-info\" (click)=\"publishIt()\">Publish</button>\r\n  </form>\r\n\r\n  <h3 class=\"text-center\">Publish Quiz</h3>\r\n    <form [formGroup]=\"Quiz_Form\">\r\n      <div class=\"form\">\r\n        <label for=\"usr\">Course Name: </label>\r\n        <input type=\"text\" formControlName=\"course_name\" class=\"form-control\" (change)=\"onChange($event.target.value)\" id=\"course_name\" required>\r\n        <div *ngIf=\"Quiz_Form.controls['course_name'].errors && !Quiz_Form.controls['course_name'].pristine\" class=\"error-msg\">\r\n          <div [hidden]=\"!Quiz_Form.controls['course_name'].errors.required\">Name is required.</div>\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"form\">\r\n      <label for=\"usr\">Quiz Name: </label>\r\n        <input type=\"text\" formControlName=\"quiz_name\" class=\"form-control\" id=\"quiz_name\" required>\r\n        <div *ngIf=\"Quiz_Form.controls['quiz_name'].errors && !Quiz_Form.controls['quiz_name'].pristine\" class=\"error-msg\">\r\n          <div [hidden]=\"!Quiz_Form.controls['quiz_name'].errors.required\">Name is required.</div>\r\n        </div>\r\n    </div>\r\n\r\n      <div class=\"form-group col-sm-12\">\r\n        <label for=\"usr\">Question: </label>\r\n        <input type=\"text\" formControlName=\"question1\" class=\"form-control\" id=\"question1\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-6\">\r\n        <label for=\"usr\">Option A: </label>\r\n        <input type=\"text\" formControlName=\"Opta1\" class=\"form-control\" id=\"Opta1\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-6\">\r\n        <label for=\"usr\">Option B: </label>\r\n        <input type=\"text\" formControlName=\"Optb1\" class=\"form-control\" id=\"Optb1\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-6\">\r\n        <label for=\"usr\">Option C: </label>\r\n        <input type=\"text\" formControlName=\"Optc1\" class=\"form-control\" id=\"Optc1\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-6\">\r\n        <label for=\"usr\">Option D: </label>\r\n        <input type=\"text\" formControlName=\"Optd1\" class=\"form-control\" id=\"Optd1\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-6\">\r\n        <label for=\"usr\">Correct Answer: </label>\r\n        <input type=\"text\" formControlName=\"answer1\" class=\"form-control\" id=\"answer1\" required>\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"Quiz_Form.invalid\" class=\"btn btn-info\" (click)=\"publishQuiz()\">PublishQuiz</button>\r\n    </form>\r\n\r\n    <h3 class=\"text-center\">Publish Document</h3>\r\n    <form [formGroup]=\"Doc_Form\">\r\n      <div class=\"form\">\r\n        <label for=\"usr\">Course Name: </label>\r\n        <input type=\"text\" formControlName=\"course_name\" class=\"form-control\" id=\"course_name\" required>\r\n        <div *ngIf=\"Quiz_Form.controls['course_name'].errors && !Quiz_Form.controls['course_name'].pristine\" class=\"error-msg\">\r\n          <div [hidden]=\"!Quiz_Form.controls['course_name'].errors.required\">Name is required.</div>\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"usr\">Choose file to Upload </label>\r\n      <!--<input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\".pdf,.docx\" required>-->\r\n      <input type=\"file\" multiple formControlName=\"file\" class=\"form-control\" id=\"file\" (change)=\"upload($event)\" accept=\".pdf,.docx\" required >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\r\n      File uploaded: <a [href]=\"downloadSrc\">{{downloadSrc}}</a>\r\n  </div>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"Doc_Form.invalid\" class=\"btn btn-info\" (click)=\"publishDoc()\">PublishDoc</button>\r\n  </form>\r\n\r\n  <!-- <p>Form value: {{ videoForm.value | json }}</p> -->\r\n  <!--<button><input id=\"File-field\" name=\"File-Field\" change=uploadFile($event) type=\"file\" accept=\".pdf,.docx\"> Upload</button>-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TrainingModule_traininmodule_class__ = __webpack_require__("../../../../../src/app/TrainingModule/traininmodule.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminComponent = /** @class */ (function () {
    function AdminComponent(db, router, fb, route, dataService, afStorage) {
        this.db = db;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.dataService = dataService;
        this.afStorage = afStorage;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__TrainingModule_traininmodule_class__["c" /* TrainingModuleData */]();
        this.test = [];
        this.item1 = new __WEBPACK_IMPORTED_MODULE_5__TrainingModule_traininmodule_class__["b" /* QuizData */]();
        this.test1 = [];
        this.item2 = new __WEBPACK_IMPORTED_MODULE_5__TrainingModule_traininmodule_class__["a" /* DocData */]();
        this.test2 = [];
        this.fileToUpload = null;
        this.key = '';
        this.createForm();
        this.QuizForm();
        this.readingparam();
        this.DocForm();
        this.items = this.db.list('/newCourse');
        this.items1 = this.db.list('/newCourse1');
        this.items2 = this.db.list('/newCourse2');
    }
    AdminComponent.prototype.createForm = function () {
        this.videoForm = this.fb.group({
            question1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            URL: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            URL1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            URL2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            embed: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            embed1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            embed2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer3: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer4: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer5: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer6: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer7: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer8: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer9: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer10: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            ownership: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Completed: false,
            isActive: true,
            isQCompleted: false,
            Score: 0,
            file: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            file1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            file2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
        });
    };
    AdminComponent.prototype.QuizForm = function () {
        this.Quiz_Form = this.fb.group({
            course_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            quiz_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            question1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Opta1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optb1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optc1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            Optd1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            answer1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            file: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            isQCompleted: false,
            Score: 0
        });
    };
    AdminComponent.prototype.DocForm = function () {
        this.Doc_Form = this.fb.group({
            course_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            file: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]
        });
    };
    AdminComponent.prototype.publishIt = function () {
        if (this.isUpdate) {
            alert('Updated sucessfully');
            this.videoForm.value.score = 0;
            this.videoForm.value.ownership = localStorage.getItem('username');
            this.dataService.UpdateCompleteVideoList(this.key, this.videoForm.value);
            console.log(this.videoForm.value.embed);
            console.log(this.videoForm.value.embed1);
            console.log(this.videoForm.value.embed2);
        }
        else {
            alert('Pusblished');
            this.videoForm.value.score = 0;
            this.videoForm.value.file = this.downloadURL
                ? this.downloadURL.value
                : null;
            this.videoForm.value.file1 = this.downloadURL1
                ? this.downloadURL1.value
                : null;
            this.videoForm.value.file2 = this.downloadURL2
                ? this.downloadURL2.value
                : null;
            this.videoForm.value.ownership = localStorage.getItem('username');
            this.db.list("/newCourse/").push(this.videoForm.value);
            console.log(this.videoForm.value);
        }
        this.router.navigate(['/training']);
    };
    AdminComponent.prototype.publishQuiz = function () {
        this.db.list("/newCourse1/").push(this.Quiz_Form.value);
    };
    AdminComponent.prototype.publishDoc = function () {
        alert('Pusblished');
        this.item.key = this.Doc_Form.value.name;
        this.item.file = this.Doc_Form.value.file;
        this.test.push(this.item);
        // this.items.push(this.test);
        this.db.list("/newCourse2/").push(this.Doc_Form.value);
        console.log(this.Doc_Form.value.name);
    };
    AdminComponent.prototype.readingparam = function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('key');
        this.isUpdate = this.key ? true : false;
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (data) {
            _this.videoList = [];
            data.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
            });
            var filteredlist = _this.videoList
                ? _this.videoList.filter(function (a) { return a.$key === _this.key; })
                : [];
            _this.videoForm.patchValue({
                question1: filteredlist[0].question1,
                question2: filteredlist[0].question2,
                question3: filteredlist[0].question3,
                question4: filteredlist[0].question4,
                question5: filteredlist[0].question5,
                question6: filteredlist[0].question6,
                question7: filteredlist[0].question7,
                question8: filteredlist[0].question8,
                question9: filteredlist[0].question9,
                question10: filteredlist[0].question10,
                name: filteredlist[0].name,
                embed: filteredlist[0].embed,
                embed1: filteredlist[0].embed1,
                embed2: filteredlist[0].embed2,
                isActive: filteredlist[0].isActive,
                Completed: filteredlist[0].Completed,
                URL: filteredlist[0].URL,
                URL1: filteredlist[0].URL1,
                URL2: filteredlist[0].URL2,
                Score: filteredlist[0].Score,
                Opta1: filteredlist[0].Opta1,
                Optb1: filteredlist[0].Optb1,
                Optc1: filteredlist[0].Optc1,
                Optd1: filteredlist[0].Optd1,
                answer1: filteredlist[0].answer1,
                Opta2: filteredlist[0].Opta2,
                Optb2: filteredlist[0].Optb2,
                Optc2: filteredlist[0].Optc2,
                Optd2: filteredlist[0].Optd2,
                answer2: filteredlist[0].answer2,
                Opta3: filteredlist[0].Opta3,
                Optb3: filteredlist[0].Optb3,
                Optc3: filteredlist[0].Optc3,
                Optd3: filteredlist[0].Optd3,
                answer3: filteredlist[0].answer3,
                Opta4: filteredlist[0].Opta4,
                Optb4: filteredlist[0].Optb4,
                Optc4: filteredlist[0].Optc4,
                Optd4: filteredlist[0].Optd4,
                answer4: filteredlist[0].answer4,
                Opta5: filteredlist[0].Opta5,
                Optb5: filteredlist[0].Optb5,
                Optc5: filteredlist[0].Optc5,
                Optd5: filteredlist[0].Optd5,
                answer5: filteredlist[0].answer5,
                Opta6: filteredlist[0].Opta6,
                Optb6: filteredlist[0].Optb6,
                Optc6: filteredlist[0].Optc6,
                Optd6: filteredlist[0].Optd6,
                answer6: filteredlist[0].answer6,
                Opta7: filteredlist[0].Opta7,
                Optb7: filteredlist[0].Optb7,
                Optc7: filteredlist[0].Optc7,
                Optd7: filteredlist[0].Optd7,
                answer7: filteredlist[0].answer7,
                Opta8: filteredlist[0].Opta8,
                Optb8: filteredlist[0].Optb8,
                Optc8: filteredlist[0].Optc8,
                Optd8: filteredlist[0].Optd8,
                answer8: filteredlist[0].answer8,
                Opta9: filteredlist[0].Opta1,
                Optb9: filteredlist[0].Optb1,
                Optc9: filteredlist[0].Optc1,
                Optd9: filteredlist[0].Optd1,
                answer9: filteredlist[0].answer1,
                Opta10: filteredlist[0].Opta10,
                Optb10: filteredlist[0].Optb10,
                Optc10: filteredlist[0].Optc10,
                Optd10: filteredlist[0].Optd10,
                answer10: filteredlist[0].answer10,
                isQCompleted: filteredlist[0].isQCompleted,
                key: filteredlist[0].key,
                file: filteredlist[0].file,
                file1: filteredlist[0].file1,
                file2: filteredlist[0].file2
            });
            console.log(filteredlist[0].URL);
            console.log(filteredlist[0].URL1);
            console.log(filteredlist[0].URL2);
        });
    };
    AdminComponent.prototype.UploadQuiz = function () {
        this.QuizForm();
    };
    AdminComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.videoForm.patchValue({
                    file: reader.result
                });
                // need to run CD since file load runs outside of zone
                // this.cd.markForCheck();
            };
        }
    };
    AdminComponent.prototype.upload = function (event) {
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref = this.afStorage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        this.downloadURL = this.task.downloadURL();
    };
    AdminComponent.prototype.upload1 = function (event) {
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref1 = this.afStorage.ref(randomId);
        this.task1 = this.ref1.put(event.target.files[0]);
        this.uploadProgress1 = this.task1.percentageChanges();
        this.downloadURL1 = this.task1.downloadURL();
    };
    AdminComponent.prototype.upload2 = function (event) {
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref2 = this.afStorage.ref(randomId);
        this.task2 = this.ref2.put(event.target.files[0]);
        this.uploadProgress2 = this.task2.percentageChanges();
        this.downloadURL2 = this.task2.downloadURL();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/Admin/admin.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_6__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__Services_videoData_service__["a" /* VideoDataService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Lato\", sans-serif;\r\n    background-image: url(\"https://goo.gl/images/vD9Jyw\");\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 300px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 20;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n    font-family: cursive;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n    margin-left: 300px; /* Same as the width of the sidenav */\r\n    font-size: 14px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;  \r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\np{\r\n    padding-top: 30px;\r\n    font-family: cursive;\r\n}\r\n\r\nh1{\r\n    text-align: center\r\n}\r\n\r\n.bx-wrapper img {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n\r\n.bg {\r\n    /* The image used */\r\n    background-image: url(\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg\");\r\n\r\n    /* Full height */\r\n    height: 100%;\r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-image: url(https://digitalample.com/wp-content/uploads/2016/07/Software-Companies-In-Nepal.jpg)\" *ngIf=authenticated>\r\n  <app-menu></app-menu>\r\n  <div class=\"main\">\r\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js\"></script>\r\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js\"></script>\r\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js\"></script>\r\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js\"></script>\r\n  \r\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.js\"></script>\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.css\">\r\n  \r\n      <script>\r\n          $(document).ready(function(){\r\n          $('.bxslider').bxSlider();\r\n          });\r\n      </script>\r\n      \r\n      <h1 style=\"Padding:1px\" class=\"card-title\"> Crowd Sourced Training </h1>\r\n      <img class=\"card-img-top\" src=\"http://www.delphisoftwareindia.com/wp-content/uploads/2016/08/1.jpg\" alt=\"Card image cap\">\r\n      <!--<div class=\"bg\">-->\r\n        <div class=\"jumbotron card-text-center\" style=\"background-color:pink; width:100%; text-align:center\">\r\n            <!--<img class=\"img-responsive\" src=\"http://rattlerathletics.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2017/4/7/20170205_vs_AT_G3_063_web.jpg\" alt=\"Chania\" max-width=\"100%\" height=\"auto\" background-position=\"center\" background-repeat=\"no-repeat\" background-size: cover>-->\r\n          <p>Hello {{name}}</p>\r\n          <p> Welcome all aspiring Employees to this website </p>\r\n          <p>This website enables to develop their technical skills,attend quizzes and able to know your level of knowledgein that area of interest. </p>\r\n        </div>\r\n      <!--</div>-->\r\n  </div>\r\n</div>\r\n<!--<ul class=\"bxslider\">\r\n    <li><img src=\"http://rattlerathletics.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2017/4/7/20170205_vs_AT_G3_063_web.jpg\" width=\"989\" height=\"492\" /></li>\r\n    <li><img src=\"http://rattlerathletics.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2017/4/9/20170325WTvs_Tarleton_68_web_85.jpg\" width=\"989\" height=\"492\" /></li>\r\n    <li><img src=\"http://rattlerathletics.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2017/4/8/20170203MT_vs_LCC_27_web.jpg\" width=\"989\" height=\"492\" /></li>\r\n</ul>-->\r\n  \r\n<div *ngIf=\"!authenticated\">\r\n  <h1>Your not an Authenticated user</h1>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(af, firebasedb, afs) {
        var _this = this;
        this.af = af;
        this.firebasedb = firebasedb;
        this.afs = afs;
        this.authenticated = false;
        this.name = localStorage.getItem("username");
        this.af.authState.subscribe(function (auth) {
            if (auth != null) {
                _this.user = af.authState;
                _this.authenticated = true;
                // this.toDoList=firebasedb.object('title')
                // console.log(this.toDoList);
                _this.itemsCollection = afs.collection('title');
                _this.items = _this.itemsCollection.valueChanges();
                console.log(_this.items);
            }
        });
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/Home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<!-- <div class=\"container col-sm-6\">\r\n  <h2>Sports Welfare Association</h2>\r\n  <form (submit)=login($event)>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Password:</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-default\" value=\"Login\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div> -->\r\n<body style=\"background-image:url(https://digitalample.com/wp-content/uploads/2016/07/Software-Companies-In-Nepal.jpg); height:500px\">\r\n  <!--<div class=\"container\">\r\n    <br>\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n      </ol>\r\n\r\n\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n        <div class=\"item active\">\r\n          <img src=\"http://www.systheon.com/wp-content/uploads/2016/11/software-companies-1200x711.jpg\" alt=\"Chania\" width=\"460\" height=\"345\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Chania</h3>\r\n            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <img src=\"http://www.abtinfo.com/images/b1.jpg\" alt=\"Chania\" width=\"460\" height=\"345\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Chania</h3>\r\n            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <img src=\"https://qph.fs.quoracdn.net/main-qimg-7623131dc6a8c99d12b0775766a2e37a\" alt=\"Flower\" width=\"460\" height=\"345\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Flowers</h3>\r\n            <p>Beautiful flowers in Kolymbari, Crete.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <img src=\"http://surejob.in/wp-content/uploads/2015/01/software_companies.jpg\" alt=\"Flower\" width=\"460\" height=\"345\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Flowers</h3>\r\n            <p>Beautiful flowers in Kolymbari, Crete.</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>-->\r\n\r\n  <!--<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n  <!--<h2>What our customers say</h2>\r\n  <div class=\"carousel slide text-center\" data-ride=\"carousel\">\r\n    <!-- Indicators\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-slide-to=\"1\"></li>\r\n      <li data-slide-to=\"2\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n        <h4>\"This company is the best. I am so happy with the result!\"<br><span>Michael Roe, Vice President, Comment Box</span></h4>\r\n      </div>\r\n      <div class=\"item\">\r\n        <h4>\"One word... WOW!!\"<br><span>John Doe, Salesman, Rep Inc</span></h4>\r\n      </div>\r\n      <div class=\"item\">\r\n        <h4>\"Could I... BE any more happy with this company?\"<br><span>Chandler Bing, Actor, FriendsAlot</span></h4>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Left and right controls\r\n    <a class=\"left carousel-control\"  role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\"  role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>-->\r\n\r\n<div class=\"container\">\r\n    <h1> Crowd Sourced Training</h1>\r\n    <button class=\"btn btn-default\" (click)=\"login()\" style=\"text-align:center\">Login With Google</button>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/Login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, af) {
        var _this = this;
        this.router = router;
        this.af = af;
        this.authenticated = false;
        this.af.authState.subscribe(function (auth) {
            console.log(auth);
            console.log(af.authState);
            if (auth != null) {
                _this.name = auth.displayName;
                localStorage.setItem("username", _this.name);
                localStorage.setItem("useremail", _this.email);
                _this.user = af.authState;
                console.log(_this.user);
                _this.authenticated = true;
            }
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (res) {
            if (res.user.emailVerified) {
                _this.router.navigate(['home']);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.af.auth.signOut();
        this.authenticated = false;
        this.router.navigate(['login']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/Login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Services/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoginState();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/Services/ng-boostrap-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBoostrapDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgBoostrapDropdownDirective = /** @class */ (function () {
    function NgBoostrapDropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this.isShow = false;
        this.dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');
    }
    NgBoostrapDropdownDirective.prototype.open = function () {
        this.isShow = !this.isShow;
        if (this.isShow) {
            this.dropdownParentEl.classList.add('show');
            this.dropdownParentEl.querySelector(".dropdown-menu").classList.add('show');
        }
        else {
            this.dropdownParentEl.classList.remove('show');
            this.dropdownParentEl.querySelector(".dropdown-menu").classList.remove('show');
        }
    };
    NgBoostrapDropdownDirective.prototype.clickout = function (event) {
        if (this.elementRef.nativeElement.contains(event.target) && this.isShow) {
            this.dropdownParentEl.classList.add('show');
            this.dropdownParentEl.querySelector(".dropdown-menu").classList.add('show');
        }
        else {
            this.dropdownParentEl.classList.remove('show');
            this.dropdownParentEl.querySelector(".dropdown-menu").classList.remove('show');
            this.isShow = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgBoostrapDropdownDirective.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgBoostrapDropdownDirective.prototype, "clickout", null);
    NgBoostrapDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appNgBoostrapDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], NgBoostrapDropdownDirective);
    return NgBoostrapDropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserloginin = false;
    }
    UserService.prototype.setUserLoginState = function () {
        return (this.isUserloginin = true);
    };
    UserService.prototype.getUserLoginState = function () {
        return this.isUserloginin;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/videoData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoDataService = /** @class */ (function () {
    function VideoDataService(db, http) {
        this.db = db;
        this.http = http;
    }
    VideoDataService.prototype.removeData = function ($key) {
        this.videoList.remove($key);
    };
    VideoDataService.prototype.getVideoData = function () {
        this.videoList = this.db.list("/newCourse");
        console.log("test", this.videoList);
        return this.videoList;
    };
    VideoDataService.prototype.getuserData = function () {
        this.userData = this.db.list("/userDetails");
        console.log("userData", this.userData);
        return this.userData;
    };
    VideoDataService.prototype.UpdateCompleteVideoList = function ($key, value) {
        this.videoList.update($key, { score: value });
    };
    VideoDataService.prototype.UpdateVideoList = function ($key, flag) {
        this.videoList.update($key, { Completed: flag });
    };
    VideoDataService.prototype.UpdateuserDataList = function ($key, flag) {
        this.userData.update($key, { Completed: flag });
    };
    VideoDataService.prototype.getUserScoreData = function () {
        this.userScoreData = this.db.list("/userScoreData");
        console.log("userScoreData", this.userScoreData);
        return this.userScoreData;
    };
    VideoDataService.prototype.updateScoreDetails = function ($key, flag) {
        this.userScoreData.update($key, { score: flag });
    };
    VideoDataService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        formData.append("file", file, file.name);
        this.http.post("http://localhost:/4200/", formData);
    };
    VideoDataService.prototype.postFile = function (fileToUpload) {
        var endpoint = "your-destination-url";
        var formData = new FormData();
        formData.append("fileKey", fileToUpload, fileToUpload.name);
        return (this.http
            .post(endpoint, formData)
            .map(function () {
            return true;
        }));
    };
    VideoDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VideoDataService);
    return VideoDataService;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Angular 2 Tutorial</h1>\r\n<h3>Introduction</h3>\r\n<p>Angular 2 is an open source JavaScript framework to build web applications in HTML and JavaScript. This tutorial looks at the various aspects of Angular 2 framework which includes the basics of the framework, the setup of Angular and how to work with the various aspects of the framework. Other topics discussed in the tutorial are advanced chapters such as interfaces, nested components and services within Angular. Topics such as routing, modules, and arrays are also dealt with in this tutorial.</p>\r\n<img src=\"https://octoperf.com/img/blog/angular2.png\">"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2Component = /** @class */ (function () {
    function Angular2Component(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2Component.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2Component);
    return Angular2Component;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_Component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2ComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2ComponentComponent = /** @class */ (function () {
    function Angular2ComponentComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2ComponentComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2ComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2ComponentComponent);
    return Angular2ComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_Intro.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h2>Course Contents</h2>\r\n<!--<ul>\r\n  <li><a href=\"/training/Angular2/Angular2/Intro/overview\">Overview</a></li>\r\n  <li><a href=\"/training/Angular2/Angular2/Intro/environment\">Environment</a></li>\r\n  <li><a href=\"/training/Angular2/Angular2/Intro/modules\">Modules</a></li>\r\n</ul>-->\r\n<ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro/overview']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro/environment']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro/modules']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro/architecture']\">Achitecture</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro/component']\">Component</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/directive']\">Directive</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/errorhandling']\">Error Handling</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/routing']\">Routing</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/navigation']\">Navigation</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/form']\">Forms</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/Intro/userinput']\">Angular2 - UserInput</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_Intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2IntroComponent = /** @class */ (function () {
    function Angular2IntroComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2IntroComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_Intro.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2IntroComponent);
    return Angular2IntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_Overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2OverviewComponent = /** @class */ (function () {
    function Angular2OverviewComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2OverviewComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_overview.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2OverviewComponent);
    return Angular2OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_architecture.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Architecture</h1>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/anatomy.jpg\"></a>\r\n<p>Each application consists of Components. Each component is a logical boundary of functionality for the application. You need to have layered services, which are used to share the functionality across components.</p>\r\nA component consists of −\r\n<ul>\r\n<li>Class − This is like a C++ or Java class which consists of properties and methods.</li>\r\n\r\n<li>Metadata − This is used to decorate the class and extend the functionality of the class.</li>\r\n\r\n<li>Template − This is used to define the HTML view which is displayed in the application.</li>\r\n</ul>\r\n\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/componet.jpg\"></a>\r\n\r\n<p>Following is an example of a component.</p>\r\n<!--<pre>\r\n  <code>\r\n    import { Component } from '@angular/core';\r\n\r\n@Component ({ \r\n   selector: 'my-app', \r\n   templateUrl: 'app/app.component.html' \r\n}) \r\n\r\nexport class AppComponent { \r\n   appTitle: string = 'Welcome';\r\n} \r\n  </code>\r\n</pre>-->\r\n\r\n<p>Each application is made up of modules. Each Angular 2 application needs to have one Angular Root Module. Each Angular Root module can then have multiple components to separate the functionality.</p>\r\n\r\n<p>Following is an example of a root module.</p>\r\n\r\n<!--<pre>\r\n    import { NgModule }      from '@angular/core'; \r\n    import { BrowserModule } from '@angular/platform-browser'; \r\n    import { AppComponent }  from './app.component';  \r\n\r\n    @NgModule ({ \r\n    imports:      [ BrowserModule ], \r\n    declarations: [ AppComponent ], \r\n    bootstrap:    [ AppComponent ] \r\n    }) \r\n    export class AppModule { }\r\n</pre>-->\r\n\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/functionality.jpg\"></a>\r\n<p>Each application is made up of feature modules where each module has a separate feature of the application. Each Angular feature module can then have multiple components to separate the functionality.</p>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/each_application.jpg\"></a>\r\n\r\n<ul class=\"pagination\">\r\n  <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/modules\">Previous</a></li>\r\n  <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/component\">Next</a></li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_architecture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2ArchitectureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2ArchitectureComponent = /** @class */ (function () {
    function Angular2ArchitectureComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2ArchitectureComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2ArchitectureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_architecture.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2ArchitectureComponent);
    return Angular2ArchitectureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Component</h1>\r\n<p>Components are a logical piece of code for Angular JS application. A Component consists of the following −</p>\r\n\r\n<ul>\r\n<li>Template − This is used to render the view for the application. This contains the HTML that needs to be rendered in the application. This part also includes the binding and directives.</li>\r\n\r\n<li>Class − This is like a class defined in any language such as C. This contains properties and methods. This has the code which is used to support the view. It is defined in TypeScript.</li>\r\n\r\n<li>Metadata − This has the extra data defined for the Angular class. It is defined with a decorator.</li>\r\n\r\n<h3>Class</h3>\r\n<p>The class decorator. The class is defined in TypeScript. The class normally has the following syntax in TypeScript.</p>\r\n\r\n<!--<pre class=\"prettyprint notranslate\">\r\n    Syntax\r\n    class classname {\r\n       Propertyname: PropertyType = Value\r\n    }\r\n</pre>-->\r\n\r\n<h4>Parameters</h4>\r\n<ul>\r\n<li>Classname − This is the name to be given to the class.</li>\r\n\r\n<li>Propertyname − This is the name to be given to the property.</li>\r\n\r\n<li>PropertyType − Since TypeScript is strongly typed, you need to give a type to the property.</li>\r\n\r\n<li>Value − This is the value to be given to the property.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Example\r\nexport class AppComponent {\r\n   appTitle: string = 'Welcome';\r\n}\r\n  </code>\r\n</pre>-->\r\n\r\n<p>In the example, the following things need to be noted −</p>\r\n\r\n<ul>\r\n<li>We are defining a class called AppComponent.</li>\r\n\r\n<li>The export keyword is used so that the component can be used in other modules in the Angular JS application.</li>\r\n\r\n<li>appTitle is the name of the property.</li>\r\n\r\n<li>The property is given the type of string.</li>\r\n\r\n<li>The property is given a value of ‘Welcome’.</li>\r\n</ul>\r\n\r\n<h3>Template</h3>\r\n<p>This is the view which needs to be rendered in the application.</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Syntax\r\n    Template: '\r\n       <HTML code>\r\n       class properties\r\n    '\r\n  </code>\r\n</pre>-->\r\n\r\n<h4>Parameters</h4>\r\n<ul>\r\n<li>HTML Code − This is the HTML code which needs to be rendered in the application.</li>\r\n\r\n<li>Class properties − These are the properties of the class which can be referenced in the template.</li>\r\n</ul>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Example\r\ntemplate: '\r\n   <div>\r\n      <h1>{{appTitle}}</h1>\r\n      <div>To Tutorials Point</div>\r\n   </div>\r\n'\r\n  </code>\r\n</pre>-->\r\n\r\n<p>In the example, the following things need to be noted −</p>\r\n<ul>\r\n  <li>We are defining the HTML code which will be rendered in our application</li>\r\n  <li>We are also referencing the appTitle property from our class.</li>\r\n</ul>\r\n\r\n<h3>Metadata</h3>\r\n<p>This is used to decorate Angular JS class with additional information</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Example\r\nimport { Component } from '@angular/core';\r\n\r\n@Component ({\r\n   selector: 'my-app',\r\n   template: ` <div>\r\n      <h1>{{appTitle}}</h1>\r\n      <div>To Tutorials Point</div>\r\n   </div> `,\r\n})\r\n\r\nexport class AppComponent {\r\n   appTitle: string = 'Welcome';\r\n}\r\n  </code>\r\n</pre>-->\r\n\r\n<p>In the above example, the following things need to be noted −</p>\r\n<ul>\r\n  <li>We are using the import keyword to import the ‘Component’ decorator from the angular/core module.</li>\r\n  \r\n  <li>We are then using the decorator to define a component.</li>\r\n\r\n  <li>The component has a selector called ‘my-app’. This is nothing but our custom html tag which can be used in our main html page.</li>\r\n\r\n</ul>\r\n<ul class=\"pagination\">\r\n  <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/architecture\">Previous</a></li>\r\n  <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/directive\">Next</a></li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_directive.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Directive</h1>\r\n<p>A directive is a custom HTML element that is used to extend the power of HTML. Angular 2 has the following directives that get called as part of the BrowserModule module.</p>\r\n\r\n<ul>\r\n<li>ngif</li>\r\n<li>ngFor</li>\r\n</ul>\r\n\r\n<p>If you view the app.module.ts file, you will see the following code and the BrowserModule module defined. By defining this module, you will have access to the 2 directives.</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    import { NgModule }      from '@angular/core';\r\n    import { BrowserModule } from '@angular/platform-browser';\r\n    import { AppComponent }  from './app.component';\r\n    \r\n    @NgModule ({\r\n       imports:      [ BrowserModule ],\r\n       declarations: [ AppComponent ],\r\n       bootstrap:    [ AppComponent ]\r\n    })\r\n    export class AppModule { }\r\n  </code>\r\n</pre>-->\r\n\r\nNow let’s look at each directive in detail.\r\n\r\n<h3>ngIf</h3>\r\n<p>The ngif element is used to add elements to the HTML code if it evaluates to true, else it will not add the elements to the HTML code.</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Syntax\r\n    *ngIf = 'expression'\r\n  </code>\r\n</pre>-->\r\n\r\n<p>If the expression evaluates to true then the corresponding gets added, else the elements are not added.\r\n\r\nLet’s now take a look at an example of how we can use the *ngif directive.</p>\r\n\r\n<ul>\r\n<li>Step 1 − First add a property to the class named appStatus. This will be of type Boolean. Let’s keep this value as true.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n    import { Component } from '@angular/core';  \r\n\r\n    @Component ({\r\n       selector: 'my-app',\r\n       templateUrl: 'app/app.component.html'\r\n    })\r\n    \r\n    export class AppComponent {\r\n       appTitle: string = 'Welcome';\r\n       appStatus: boolean = true;\r\n    }\r\n  </code>\r\n</pre>-->\r\n\r\n<li>Step 2 − Now in the app.component.html file, add the following code.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n    <div *ngIf = 'appStatus'>{{appTitle}} Tutorialspoint </div>\r\n  </code>\r\n</pre>-->\r\n \r\n<p>In the above code, we now have the *ngIf directive. In the directive we are evaluating the value of the appStatus property. Since the value of the property should evaluate to true, it means the div tag should be displayed in the browser.</p>\r\n\r\n<h3>ngFor</h3>\r\n<p>The ngFor element is used to elements based on the condition of the For loop.</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    Syntax\r\n*ngFor = 'let variable of variablelist'\r\n  </code>\r\n</pre>-->\r\n\r\n<p>The variable is a temporary variable to display the values in the variablelist.</p>\r\n\r\n<p>Let’s now take a look at an example of how we can use the *ngFor directive.</p>\r\n<ul>\r\n<li>Step 1 − First add a property to the class named appList. This will be of the type which can be used to define any type of arrays.\r\n\r\n  <!--<pre>\r\n    <code>\r\n      import { Component } from '@angular/core';\r\n \r\n      @Component ({\r\n         selector: 'my-app',\r\n         templateUrl: 'app/app.component.html'\r\n      })\r\n      \r\n      export class AppComponent {\r\n         appTitle: string = 'Welcome';\r\n         appList: any[] = [ {\r\n            \"ID\": \"1\",\r\n            \"Name\" : \"One\"\r\n         },\r\n      \r\n         {\r\n            \"ID\": \"2\",\r\n            \"Name\" : \"Two\"\r\n         } ];\r\n      }\r\n    </code>\r\n  </pre>-->\r\n\r\n<p>Hence, we are defining the appList as an array which has 2 elements. Each element has 2 sub properties as ID and Name.</p>\r\n\r\n<li>Step 2 − In the app.component.html, define the following code.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n    <div *ngFor = 'let lst of appList'> \r\n      <ul> \r\n         <li>{{lst.ID}}</li> \r\n         <li>{{lst.Name}}</li> \r\n      </ul> \r\n   </div>\r\n  </code>\r\n</pre>-->\r\n\r\n<p>In the above code, we are now using the ngFor directive to iterate through the appList array. We then define a list where each list item is the ID and name parameter of the array.</p>\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/component\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/errorandling\">Next</a></li>\r\n  </ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2DirectiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2DirectiveComponent = /** @class */ (function () {
    function Angular2DirectiveComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2DirectiveComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2DirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_directive.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2DirectiveComponent);
    return Angular2DirectiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_environment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Environment</h1>\r\n<p>To start working with Angular 2, you need to get the following key components installed.</p>\r\n<ul>\r\n<li>Npm − This is known as the node package manager that is used to work with the open source repositories. Angular JS as a framework has dependencies on other components. And npm can be used to download these dependencies and attach them to your project.</li>\r\n\r\n<li>Git − This is the source code software that can be used to get the sample application from the github angular site.</li>\r\n\r\n<li>Editor − There are many editors that can be used for Angular JS development such as Visual Studio code and WebStorm. In our tutorial, we will use Visual Studio code which comes free of cost from Microsoft.</li>\r\n\r\nnpm Installation\r\nLet’s now look at the steps to get npm installed. The official site for npm is https://www.npmjs.com/\r\n\r\n<ul>\r\n<li>Step 1 − Go to the “get started with npm” section in the site.</li>\r\n<li>Step 2 − In the next screen, choose the installer to download, depending on the operating system. For the purpose of this exercise, download the Windows 64 bit version.</li>\r\n<li>Step 3 − Launch the installer. In the initial screen, click the Next button.</li>\r\n<li>Step 4 − In the next screen, Accept the license agreement and click the next button.</li>\r\n<li>Step 5 − In the next screen, choose the destination folder for the installation and click the Next button.</li>\r\n<li>Step 6 − Choose the components in the next screen and click the Next button. You can accept all the components for the default installation.</li>\r\n<li>Step 7 − In the next screen, click the Install button.</li>\r\n<li>Step 8 − Once the installation is complete, click the Finish button.</li>\r\n<li>Step 9 − To confirm the installation, in the command prompt you can issue the command npm version. You will get the version number of npm as shown in the following screenshot.</li>\r\n</ul>\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/overview\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n  </ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_environment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2EnvironmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2EnvironmentComponent = /** @class */ (function () {
    function Angular2EnvironmentComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2EnvironmentComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2EnvironmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_environment.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2EnvironmentComponent);
    return Angular2EnvironmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_errorhandling.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Error Handling</h1>\r\n<p>Angular 2 applications have the option of error handling. This is done by including the ReactJS catch library and then using the catch function.\r\n\r\n<p>Let’s see the code required for error handling. This code can be added on top of the chapter for CRUD operations using http.\r\n\r\n<p>In the product.service.ts file, enter the following code −</p>\r\n\r\n<!--<pre>\r\n  <code>\r\n    import { Injectable } from '@angular/core'; \r\n    import { Http , Response } from '@angular/http'; \r\n    import { Observable } from 'rxjs/Observable'; \r\n    \r\n    import 'rxjs/add/operator/map'; \r\n    import 'rxjs/add/operator/do'; \r\n    import 'rxjs/add/operator/catch'; \r\n    import { IProduct } from './product';  \r\n    \r\n    @Injectable() \r\n    export class ProductService { \r\n       private _producturl = 'app/products.json'; \r\n       constructor(private _http: Http){}  \r\n    \r\n       getproducts(): Observable<IProduct[]> { \r\n          return this._http.get(this._producturl) \r\n          .map((response: Response) => <IProduct[]> response.json()) \r\n          .do(data => console.log(JSON.stringify(data))) \r\n          .catch(this.handleError); \r\n       }  \r\n       \r\n       private handleError(error: Response) { \r\n          console.error(error); \r\n          return Observable.throw(error.json().error()); \r\n       } \r\n    }\r\n  </code>\r\n</pre>-->\r\n\r\n<ul>\r\n<li>The catch function contains a link to the Error Handler function.</li>\r\n\r\n<li>In the error handler function, we send the error to the console. We also throw the error back to the main program so that the execution can continue.</li>\r\n</ul>\r\n\r\n<p>Now, whenever you get an error it will be redirected to the error console of the browser.</p>\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/directive\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/routing\">Next</a></li>\r\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_errorhandling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2ErrorHandlingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2ErrorHandlingComponent = /** @class */ (function () {
    function Angular2ErrorHandlingComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2ErrorHandlingComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2ErrorHandlingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_errorhandling.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2ErrorHandlingComponent);
    return Angular2ErrorHandlingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_file.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<div class=\"main\">\r\n  <div class=\"card card-body bg-light\">Files</div>\r\n  <ul>\r\n  <li><a href=\"{{videodata1[0].URL}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">External Link1</a></li><br><br>\r\n  <li><a href=\"{{videodata1[0].URL1}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">External Link2</a></li><br><br>\r\n  <li><a href=\"{{videodata1[0].URL2}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">External Link3</a></li><br><br>\r\n  <li><a href=\"{{videodata1[0].file}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Document Link1</a></li><br><br>\r\n  <li><a href=\"{{videodata1[0].file1}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Document Link2</a></li><br><br>\r\n  <li><a href=\"{{videodata1[0].file2}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Document Link3</a></li><br><br>\r\n  </ul>\r\n    <!--<div style=\"height:20%;margin:0%\" *ngIf=\"item.embed && item.isActive\">\r\n      <iframe [src]='getEmbedUrl(item)' allowfullscreen class=\"col-sm-4\"></iframe>\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" [(ngModel)]=\"item.Completed\" (click)=\"CheckboxCheck(item.$key,item.Completed)\">Mark as Complete</label>\r\n          <img src=\"assets/pdf.jpg\" style=\"height:25px;width:25px\" class=\"smallStatusImage\" alt=\"Excel Icon for View Accrual Excel Report\"/>\r\n          <a href=\"{{item.URL}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the pdf file</a>\r\n          <a href=\"{{item.file}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the uploaded file</a>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"Quiz(item.name)\" >Go to Quiz</button>\r\n      </div>\r\n    </div>-->\r\n</div>\r\n\r\n<!--<h3>{{item.name}}</h3>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2FileComponent = /** @class */ (function () {
    function Angular2FileComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                    console.log(_this.videodata1[0].URL);
                }
            });
        });
    }
    Angular2FileComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_file.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2FileComponent);
    return Angular2FileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Forms</h1>\r\n<p>Angular 2 can also design forms which can use two-way binding using the ngModel directive. Let’s see how we can achieve this.</p>\r\n\r\n<ul>\r\n<li>Step 1 − Create a model which is a products model. Create a file called products.ts file.</li>\r\n\r\n<li>Step 2 − Place the following code in the file.</li>\r\n\r\n<!--<pre>\r\n      <code>\r\n         export class Product { \r\n   constructor ( \r\n      public productid: number, \r\n      public productname: string \r\n   ) {  } \r\n} \r\n      </code>\r\n</pre>-->\r\n\r\nThis is a simple class which has 2 properties, productid and productname.\r\n\r\n<li>Step 3 − Create a product form component called product-form.component.ts component and add the following code −</li>\r\n\r\n<!--<pre>\r\n      <code>\r\nimport { Component } from '@angular/core';\r\nimport { Product } from './products';\r\n\r\n@Component ({\r\n   selector: 'product-form',\r\n   templateUrl: './product-form.component.html'\r\n})\r\n\r\nexport class ProductFormComponent {\r\n   model = new Product(1,'ProductA');\r\n}\r\n      </code>\r\n</pre>-->\r\n\r\n<p>The following points need to be noted about the above program.\r\n\r\nCreate an object of the Product class and add values to the productid and productname.\r\n\r\nUse the templateUrl to specify the location of our product-form.component.html which will render the component.</p>\r\n\r\n<li>Step 4 − Create the actual form. Create a file called product-form.component.html and place the following code.</li>\r\n\r\n<!--<pre>\r\n      <code>\r\n<div class = \"container\">\r\n   <h1>Product Form</h1>\r\n   <form>\r\n      <div class = \"form-group\">\r\n         <label for = \"productid\">ID</label>\r\n         <input type = \"text\" class = \"form-control\" id = \"productid\" required\r\n            [(ngModel)] = \"model.productid\" name = \"id\">\r\n      </div>\r\n      \r\n      <div class = \"form-group\">\r\n         <label for = \"name\">Name</label>\r\n         <input type = \"text\" class = \"form-control\" id = \"name\"\r\n            [(ngModel)] = \"model.productname\" name = \"name\">\r\n      </div>\r\n   </form>\r\n</div>\r\n      </code>\r\n</pre>-->\r\n\r\n<p>The following point needs to be noted about the above program.\r\n\r\nThe ngModel directive is used to bind the object of the product to the separate elements on the form.</p>\r\n\r\n<li>Step 5 − Place the following code in the app.component.ts file.</li>\r\n\r\n<!--<pre>\r\n      <code>\r\nimport { Component } from '@angular/core';\r\n\r\n@Component ({\r\n   selector: 'my-app',\r\n   template: '<product-form></product-form>'\r\n})\r\nexport class AppComponent { }\r\n      </code>\r\n</pre>-->\r\n\r\n<li>Step 6 − Place the below code in the app.module.ts file</li>\r\n\r\n<!--<pre>\r\n      <code>\r\nimport { NgModule } from '@angular/core';\r\nimport { BrowserModule } from '@angular/platform-browser';\r\nimport { AppComponent } from './app.component';\r\nimport { FormsModule } from '@angular/forms';\r\nimport { ProductFormComponent } from './product-form.component';\r\n\r\n@NgModule ({\r\n   imports: [ BrowserModule,FormsModule],\r\n   declarations: [ AppComponent,ProductFormComponent],\r\n   bootstrap: [ AppComponent ]\r\n})\r\nexport class AppModule { }\r\n      </code>\r\n</pre>-->\r\n\r\n<li>Step 7 − Save all the code and run the application using npm. Go to your browser, you will see the following output.</li>\r\n</ul>\r\n\r\n<ul class=\"pagination\">\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/navigation\">Previous</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/userinput\">Next</a></li>\r\n    </ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2FormComponent = /** @class */ (function () {
    function Angular2FormComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2FormComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2FormComponent);
    return Angular2FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_modules.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Modules</h1>\r\n<p>>Modules are used in Angular JS to put logical boundaries in your application. Hence, instead of coding everything into one application, you can instead build everything into separate modules to separate the functionality of your application. Let’s inspect the code which gets added to the demo application.</p>\r\n\r\n<p>In Visual Studio code, go to the app.module.ts folder in your app folder. This is known as the root module class.</p>\r\n\r\nRoot Module Class\r\nThe following code will be present in the app.module.ts file.\r\n\r\n<!--<pre>\r\n  <code>\r\nimport { NgModule }      from '@angular/core'; \r\nimport { BrowserModule } from '@angular/platform-browser';  \r\nimport { AppComponent }  from './app.component';  \r\n\r\n@NgModule ({ \r\n   imports:      [ BrowserModule ], \r\n   declarations: [ AppComponent ], \r\n   bootstrap:    [ AppComponent ] \r\n}) \r\nexport class AppModule { }\r\n  </code>\r\n</pre>-->\r\n\r\n<p>Let’s go through each line of the code in detail.</p>\r\n\r\n<li>The import statement is used to import functionality from the existing modules. Thus, the first 3 statements are used to import the NgModule, BrowserModule and AppComponent modules into this module.</li>\r\n\r\n<li>The NgModule decorator is used to later on define the imports, declarations, and bootstrapping options.</li>\r\n\r\n<li>The BrowserModule is required by default for any web based angular application.</li>\r\n\r\n<li>The bootstrap option tells Angular which Component to bootstrap in the application.</li>\r\n\r\n<p>A module is made up of the following parts −</p>\r\n<ul>\r\n<li>Bootstrap array − This is used to tell Angular JS which components need to be loaded so that its functionality can be accessed in the application. Once you include the component in the bootstrap array, you need to declare them so that they can be used across other components in the Angular JS application.</li>\r\n\r\n<li>Export array − This is used to export components, directives, and pipes which can then be used in other modules.</li>\r\n\r\n<li>Import array − Just like the export array, the import array can be used to import the functionality from other Angular JS modules.</li>\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/environment\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/architecture\">Next</a></li>\r\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_modules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2ModulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2ModulesComponent = /** @class */ (function () {
    function Angular2ModulesComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2ModulesComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2ModulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_modules.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2ModulesComponent);
    return Angular2ModulesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Navigation</h1>\r\n<p>In Angular 2, it is also possible to carry out manual navigation. Following are the steps.</p>\r\n<ul>\r\n<li>Step 1 − Add the following code to the Inventory.component.ts file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\nimport { Component } from '@angular/core'; \r\nimport { Router }  from '@angular/router';  \r\n\r\n@Component ({  \r\n   selector: 'my-app',  \r\n   template: 'Inventory \r\n   <a class = \"button\" (click) = \"onBack()\">Back to Products</a>' \r\n})  \r\n\r\nexport class AppInventory {  \r\n   constructor(private _router: Router){} \r\n\r\n   onBack(): void { \r\n      this._router.navigate(['/Product']); \r\n   } \r\n}\r\n  </code>\r\n</pre>-->\r\n\r\n<p>The following points need to be noted about the above program −</p>\r\n\r\n<ul>\r\n<li>Declare an html tag which has an onBack function tagged to the click event. Thus, when a user clicks this, they will be directed back to the Products page.</li>\r\n\r\n<li>In the onBack function, use the router.navigate to navigate to the required page.</li>\r\n</ul>\r\n\r\n<li>Step 2 − Now, save all the code and run the application using npm. Go to the browser, you will see the following output.</li>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/application_using_npm.jpg\"></a>\r\n\r\n<li>Step 3 − Click the Inventory link.</li>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/inventory_link.jpg\"></a>\r\n\r\nInventory Link\r\n<li>Step 4 − Click the ‘Back to products’ link, you will get the following output which takes you back to the Products page.</li>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/back_to_products.jpg\"></a>\r\n</ul>\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/routing\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/form\">Next</a></li>\r\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2NavigationComponent = /** @class */ (function () {
    function Angular2NavigationComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2NavigationComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_navigation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2NavigationComponent);
    return Angular2NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_overview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Overview</h1>\r\n<p>Angular JS is an open source framework built over JavaScript. It was built by the developers at Google. This framework was used to overcome obstacles encountered while working with Single Page applications. Also, testing was considered as a key aspect while building the framework. It was ensured that the framework could be easily tested. The initial release of the framework was in October 2010.</p>\r\n\r\n<h3>Features of Angular 2</h3>\r\n<p>Following are the key features of Angular 2 −</p>\r\n<ul>\r\n<li>Components − The earlier versions of Angular had a focus of Controllers but now has changed the focus to having components over controllers. Components help to build the applications into many modules. This helps in better maintaining the application over a period of time.</li>\r\n\r\n<li>TypeScript − The newer version of Angular is based on TypeScript. This is a superset of JavaScript and is maintained by Microsoft.</li>\r\n\r\n<li>Services − Services are a set of code that can be shared by different components of an application. So for example if you had a data component that picked data from a database, you could have it as a shared service that could be used across multiple applications.</li>\r\n</ul>\r\n<p>In addition, Angular 2 has better event-handling capabilities, powerful templates, and better support for mobile devices.</p>\r\n\r\n<h3>Components of Angular 2</h3>\r\n<p>Angular 2 has the following components −</p>\r\n<ul>\r\n<li>Modules − This is used to break up the application into logical pieces of code. Each piece of code or module is designed to perform a single task.</li>\r\n\r\n<li>Component − This can be used to bring the modules together.</li>\r\n\r\n<li>Templates − This is used to define the views of an Angular JS application.</li>\r\n\r\n<li>Metadata − This can be used to add more data to an Angular JS class.</li>\r\n\r\n<li>Service − This is used to create components which can be shared across the entire application.</li>\r\n</ul>\r\n<p>We will discuss all these components in detail in the subsequent chapters of this tutorial.</p>\r\n\r\n<p>The official site for Angular is https://angular.io/ The site has all information and documentation about Angular 2.</p>\r\n\r\n<img src=\"https://www.tutorialspoint.com/angular2/images/official_site.jpg\">"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_routing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>Routing</h1>\r\n<p>Routing helps in directing users to different pages based on the option they choose on the main page. Hence, based on the option they choose, the required Angular Component will be rendered to the user.</p>\r\n<p>Let’s see the necessary steps to see how we can implement routing in an Angular 2 application.</p>\r\n\r\n<ul>\r\n\r\n<li>Step 1 − Add the base reference tag in the index.html file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n<!DOCTYPE html>\r\n<html>\r\n   <head>\r\n      <base href = \"/\">\r\n      <title>Angular QuickStart</title>\r\n      <meta charset = \"UTF-8\">\r\n      <meta name = \"viewport\" content = \"width = device-width, initial-scale = 1\">\r\n      \r\n      <base href = \"/\">\r\n      <link rel = \"stylesheet\" href = \"styles.css\">\r\n\r\n      Polyfill(s) for older browsers\r\n      <script src = \"node_modules/core-js/client/shim.min.js\"></script>\r\n      <script src = \"node_modules/zone.js/dist/zone.js\"></script>\r\n      <script src = \"node_modules/systemjs/dist/system.src.js\"></script>\r\n      <script src = \"systemjs.config.js\"></script>\r\n\r\n      <script>\r\n         System.import('main.js').catch(function(err){ console.error(err); });\r\n      </script>\r\n   </head>\r\n\r\n   <body>\r\n      <my-app></my-app>\r\n   </body>\r\n</html>\r\n  </code>\r\n</pre>-->\r\n\r\n<li>Step 2 − Create two routes for the application. For this, create 2 files called Inventory.component.ts and product.component.ts</li>\r\n\r\nOpen Editors\r\n<li>Step 3 − Place the following code in the product.component.ts file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n      import { Component } from '@angular/core';\r\n\r\n      @Component ({\r\n         selector: 'my-app',\r\n         template: 'Products',\r\n      })\r\n      export   class   Appproduct  {\r\n      }\r\n  </code>\r\n</pre>-->\r\n\r\n<li>Step 4 − Place the following code in the Inventory.component.ts file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\nimport { Component } from '@angular/core';\r\n\r\n@Component ({\r\n   selector: 'my-app',\r\n   template: 'Inventory',\r\n})\r\nexport class AppInventory  {\r\n}\r\n  </code>\r\n</pre>-->\r\n\r\nBoth of the components don’t do anything fancy, they just render the keywords based on the component. So for the Inventory component, it will display the Inventory keyword to the user. And for the products component, it will display the product keyword to the user.\r\n\r\n<li>Step 5 − In the app.module.ts file, add the following code −</li>\r\n\r\n<!--<pre>\r\n  <code>\r\nimport { NgModule } from '@angular/core';\r\nimport { BrowserModule } from '@angular/platform-browser';\r\nimport { AppComponent }  from './app.component';\r\nimport { Appproduct } from './product.component';\r\nimport { AppInventory } from './Inventory.component';\r\nimport { RouterModule, Routes } from '@angular/router';\r\n\r\nconst appRoutes: Routes = [\r\n   { path: 'Product', component: Appproduct },\r\n   { path: 'Inventory', component: AppInventory },\r\n];\r\n\r\n@NgModule ({\r\n   imports: [ BrowserModule,\r\n   RouterModule.forRoot(appRoutes)],\r\n   declarations: [ AppComponent,Appproduct,AppInventory],\r\n   bootstrap: [ AppComponent ]\r\n})\r\nexport class AppModule { }\r\n  </code>\r\n</pre>-->\r\n\r\nThe following points need to be noted about the above program −\r\n<ul>\r\n<li>The appRoutes contain 2 routes, one is the Appproduct component and the other is the AppInventory component.</li>\r\n\r\n<li>Ensure to declare both of the components.</li>\r\n\r\n<li>The RouterModule.forRoot ensures to add the routes to the application.</li>\r\n</ul>\r\n\r\n<li>Step 6 − In the app.component.ts file, add the following code.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n      import { Component } from '@angular/core';\r\n      @Component ({\r\n        selector: 'my-app',\r\n        template: `\r\n        <ul>\r\n           <li><a [routerLink] = \"['/Product']\">Product</a></li>\r\n           <li><a [routerLink] = \"['/Inventory']\">Inventory</a></li>\r\n        </ul>\r\n        <router-outlet></router-outlet>`\r\n     })\r\n     export class AppComponent  { }\r\n  </code>\r\n</pre>-->\r\n\r\n<p>The following point needs to be noted about the above program −</p>\r\n<ul>\r\n<li><code><router-outlet></router-outlet></code> is the placeholder to render the component based on which option the user chooses.</li>\r\n\r\n<li>Now, save all the code and run the application using npm. Go to the browser, you will see the following output.</li>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/product.jpg\"></a>\r\n<li>Now if you click the Inventory link, you will get the following output.</li>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/inventory.jpg\"></a>\r\n</ul>\r\n</ul>\r\n\r\n<h3>Adding an Error Route</h3>\r\n<p>In Routing, one can also add an error route. This can happen if the user goes to a page which does not exist in the application.</p>\r\n\r\n<p>Let’s see how we can go about implementing this.</p>\r\n\r\n<ul>\r\n<li>Step 1 − Add a PageNotFound component as NotFound.component.ts as shown below −</li>\r\n\r\n<li>Step 2 − Add the following code to the new file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n      import { Component } from '@angular/core';\r\n\r\n      @Component ({  \r\n         selector: 'my-app',  \r\n         template: 'Not Found', \r\n      })  \r\n      export class PageNotFoundComponent {  \r\n      } \r\n  </code>\r\n</pre>-->\r\n\r\n<li>Step 3 − Add the following code to the app.module.ts file.</li>\r\n\r\n<!--<pre>\r\n  <code>\r\n      import { NgModule } from '@angular/core'; \r\n      import { BrowserModule } from '@angular/platform-browser'; \r\n      import { AppComponent } from './app.component'; \r\n      import { Appproduct } from './product.component' \r\n      import { AppInventory } from  './Inventory.component' \r\n      import { PageNotFoundComponent } from  './NotFound.component' \r\n      import { RouterModule, Routes } from '@angular/router';  \r\n      \r\n      const appRoutes: Routes = [ \r\n         { path: 'Product', component: Appproduct }, \r\n         { path: 'Inventory', component: AppInventory }, \r\n         { path: '**', component: PageNotFoundComponent } \r\n      ];  \r\n      \r\n      @NgModule ({ \r\n         imports: [ BrowserModule, \r\n         RouterModule.forRoot(appRoutes)], \r\n         declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent], \r\n         bootstrap: [ AppComponent ] \r\n      }) \r\n      \r\n      export class AppModule {\r\n      } \r\n  </code>\r\n</pre>-->\r\n\r\n<p>The following point needs to be noted about the above program −</p>\r\n\r\n<ul>\r\n<li>Now we have an extra route called path: '**', component: PageNotFoundComponent. Hence, ** is for any route which does not fit the default route. They will be directed to the PageNotFoundComponent component.</li>\r\n\r\n<p>Now, save all the code and run the application using npm. Go to your browser, and you will see the following output. Now, when you go to any wrong link you will get the following output.</p>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/pagenotfound.jpg\"></a>\r\n</ul>\r\n\r\n\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/Errorhandling\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/navigation\">Next</a></li>\r\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2RoutingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2RoutingComponent = /** @class */ (function () {
    function Angular2RoutingComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2RoutingComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2RoutingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_routing.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2RoutingComponent);
    return Angular2RoutingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_userinput.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/this.videodata1[0].name']\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<h1>User Input</h1>\r\n\r\n<p>In Angular 2, you can make the use of DOM element structure of HTML to change the values of the elements at run time. Let’s look at some in detail.\r\n\r\n<h4>The Input Tag</h4>\r\n<p>In the app.component.ts file place the following code.</p>\r\n\r\n<!--<pre>\r\n  <code>\r\nimport { \r\n   Component \r\n} from '@angular/core';  \r\n\r\n@Component ({ \r\n   selector: 'my-app', \r\n   template: ' \r\n      <div> \r\n         <input [value] = \"name\" (input) = \"name = $event.target.value\"> \r\n         {{name}} \r\n      </div> \r\n   ' \r\n}) \r\nexport class AppComponent { }\r\n  </code>\r\n</pre>-->\r\n\r\n<p>Following things need to be noted about the above code.</p>\r\n<ul>\r\n\r\n<li>[value] = ”username” − This is used to bind the expression username to the input element’s value property.</li>\r\n\r\n<li>(input) = ”expression” − This a declarative way of binding an expression to the input element’s input event.</li>\r\n\r\n<li>username = $event.target.value − The expression that gets executed when the input event is fired.\r\n\r\n<li>$event − Is an expression exposed in event bindings by Angular, which has the value of the event’s payload.\r\n\r\n<p>Once you save all the code changes and refresh the browser, you will get the following output.\r\n\r\nYou can now type anything and the same input will reflect in the text next to the Input control.</p>\r\n\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/input_tag.jpg\"></a>\r\n\r\n<!--<h3>Click Input</h3>\r\n<p>In the app.component.ts file place the following code.</p>\r\n<pre>\r\n  <code>\r\n      import {\r\n        Component\r\n     } from '@angular/core';\r\n     \r\n     @Component ({\r\n        selector: 'my-app',\r\n        template: '<button (Click) = \"onClickMe()\"> Click Me </button> {{clickMessage}}'\r\n     })\r\n     \r\n     export class AppComponent {\r\n        clickMessage = 'Hello';\r\n        onClickMe() {\r\n           this.clickMessage = 'This tutorial!';\r\n        }\r\n     }\r\n  </code>\r\n</pre>-->\r\n\r\n<p>Once you save all the code changes and refresh the browser, you will get the following output.</p>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/click_me.jpg\"></a>\r\n\r\n<p>Once you save all the code changes and refresh the browser, you will get the following output.</p>\r\n<a href=\"https://www.tutorialspoint.com/angular2/images/click_me_button.jpg\"></a>\r\n<ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/form\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"/training/Angular2/Angular2/Intro/routing\">Next</a></li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_userinput.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2UserInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2UserInputComponent = /** @class */ (function () {
    function Angular2UserInputComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    Angular2UserInputComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2UserInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_userinput.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2UserInputComponent);
    return Angular2UserInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_video.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\r\n  <ul class=\"navbar-nav\">\r\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n  </ul>\r\n</nav>\r\n<div class=\"main\">\r\n  <div class=\"card card-body bg-light\">Videos</div>\r\n    <!--<a href=\"{{videodata1[0].embed}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the pdf file</a>-->\r\n    <!--<div style=\"height:20%;margin:0%\" *ngIf=\"videodata1[0].embed && videodata1[0].isActive\">-->\r\n      <!--<h1>hello</h1>-->\r\n      <!--<iframe [src]='getEmbedUrl(this.videodata1[0].embed)' allowfullscreen class=\"col-sm-4\"></iframe>-->\r\n      <iframe [src]='getEmbedUrl1(this.videodata1[0].embed)' allowfullscreen class=\"col-sm-4\"></iframe><br><br>\r\n      <iframe [src]='getEmbedUrl2(this.videodata1[0].embed1)' allowfullscreen class=\"col-sm-4\"></iframe><br><br>\r\n      <iframe [src]='getEmbedUrl3(this.videodata1[0].embed2)' allowfullscreen class=\"col-sm-4\"></iframe><br><br>\r\n    <!--</div>-->\r\n    <!--<a href=\"{{videodata1[0].file}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the uploaded file</a>-->\r\n    <!--<div style=\"height:20%;margin:0%\" *ngIf=\"item.embed && item.isActive\">\r\n      <iframe [src]='getEmbedUrl(item)' allowfullscreen class=\"col-sm-4\"></iframe>\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" [(ngModel)]=\"item.Completed\" (click)=\"CheckboxCheck(item.$key,item.Completed)\">Mark as Complete</label>\r\n          <img src=\"assets/pdf.jpg\" style=\"height:25px;width:25px\" class=\"smallStatusImage\" alt=\"Excel Icon for View Accrual Excel Report\"/>\r\n          <a href=\"{{item.URL}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the pdf file</a>\r\n          <a href=\"{{item.file}}\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the uploaded file</a>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"Quiz(item.name)\" >Go to Quiz</button>\r\n      </div>\r\n    </div>-->\r\n</div>\r\n\r\n<!--<h3>{{item.name}}</h3>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Angular2/Angular2_video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angular2VideoComponent = /** @class */ (function () {
    function Angular2VideoComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                    console.log(_this.videodata1[0].embed);
                }
            });
        });
    }
    Angular2VideoComponent.prototype.getEmbedUrl1 = function (item) {
        console.log(this.videodata1[0].embed2);
        return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed1 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed2 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=-' + item + '?ecver=2');
    };
    Angular2VideoComponent.prototype.getEmbedUrl2 = function (item) {
        console.log(this.videodata1[0].embed2);
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed2 + '?ecver=2');
        return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed1 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed2 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=-' + item + '?ecver=2');
    };
    Angular2VideoComponent.prototype.getEmbedUrl3 = function (item) {
        console.log(this.videodata1[0].embed2);
        return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed2 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed1 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed2 + '?ecver=2');
        //return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=-' + item + '?ecver=2');
    };
    Angular2VideoComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    Angular2VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Angular2',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_video.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Angular2VideoComponent);
    return Angular2VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Java/Java.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\r\n    <li class=\"nav-item\"><a class=\"nav-link\" href=#intro>HOME</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training']\">Training Modules</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/complete']\">Completed Trainings</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/current']\">Pending Trainings</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/progress']\">Progress</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\r\n    </ul>\r\n  </nav>\r\n<h1>Angular 2 Tutorial</h1>\r\n<a href=\"/training/Java/intro\">home</a>\r\n<h1 id=\"intro\">Introduction</h1>\r\n<p>Angular 2 is an open source JavaScript framework to build web applications in HTML and JavaScript. This tutorial looks at the various aspects of Angular 2 framework which includes the basics of the framework, the setup of Angular and how to work with the various aspects of the framework. Other topics discussed in the tutorial are advanced chapters such as interfaces, nested components and services within Angular. Topics such as routing, modules, and arrays are also dealt with in this tutorial.</p>\r\n<img src=\"https://octoperf.com/img/blog/angular2.png\">\r\n<a href=\"/../..Overview\">home</a>\r\n<h1 id=\"intro\">Features</h1>\r\n<ul>\r\n<li>AngularJS is a powerful JavaScript based development framework to create RICH Internet Application(RIA).</li>\r\n\r\n<li>AngularJS provides developers options to write client side application (using JavaScript) in a clean MVC(Model View Controller) way.</li>\r\n\r\n<li>Application written in AngularJS is cross-browser compliant. AngularJS automatically handles JavaScript code suitable for each browser.</li>\r\n\r\n<li>AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache License version 2.0.</li>\r\n\r\n<li>Overall, AngularJS is a framework to build large scale and high performance web application while keeping them as easy-to-maintain.</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Java/Java.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JavaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JavaComponent = /** @class */ (function () {
    function JavaComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    JavaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Java',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Java/Java.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], JavaComponent);
    return JavaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class='main' *ngIf=\"this.videodata1[0].name\">\r\n    <div class=\"card card-body bg-light\">{{ this.videodata1[0].name}} Training</div>\r\n        <div *ngFor='let item of videoList'>\r\n            <span *ngIf=\"this.videodata1[0].name == Java\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"Trainingmaterial1(item.name)\" >Start</button></span>\r\n            <span *ngIf=\"this.videodata1[0].name == Angular\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"Trainingmaterial2(item.name)\" >Start</button></span>\r\n        </div>\r\n        \r\n    <!--<script></script>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"Trainingmaterial()\">Click here for the uploaded file</button>\r\n    if({{this.videodata1[0].name}} == Java)\r\n        <a [routerLink]=\"['/training/this.videodata1[0].name/Java']\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the uploaded file</a>\r\n        if({{this.videodata1[0].name}} == Angular)\r\n        <a [routerLink]=\"['/training/name/Java']\" target=\"_blank\" class=\"col-sm-4\" style=\"padding-bottom: 10px\">Click here for the uploaded file</a>      \r\n    -->\r\n      \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingmaterialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingmaterialsComponent = /** @class */ (function () {
    function TrainingmaterialsComponent(dom, db, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.dataService.getVideoData().snapshotChanges().subscribe(function (item) {
            _this.videoList = [];
            console.log(_this.videoList);
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x['$key'] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
            });
            _this.param1 = _this.route.snapshot.paramMap.get('name');
            _this.videodata1 = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param1) {
                    _this.videodata1.push(v);
                    console.log(_this.videodata1);
                }
            });
        });
    }
    TrainingmaterialsComponent.prototype.getEmbedUrl = function (item) {
        return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videodata1[0].embed + '?ecver=2');
    };
    TrainingmaterialsComponent.prototype.CheckboxCheck = function ($key, Completed) {
        this.dataService.UpdateVideoList($key, !Completed);
    };
    TrainingmaterialsComponent.prototype.Quiz = function (item) {
        this.router.navigate(['/quiz/' + this.videodata1[0].name]);
    };
    TrainingmaterialsComponent.prototype.Trainingmaterial1 = function (item) {
        this.router.navigate(['/training/' + item + '/' + 'Java']);
    };
    TrainingmaterialsComponent.prototype.Trainingmaterial2 = function (item) {
        this.router.navigate(['/training/' + item + '/' + 'Angular']);
    };
    TrainingmaterialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Trainingmaterials',
            template: __webpack_require__("../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TrainingmaterialsComponent);
    return TrainingmaterialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/trainingmodule.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class=\"main\">\r\n  <div class=\"card card-body bg-light\">Training Modules</div>\r\n  <div *ngFor='let item of videoList'>\r\n    <span *ngIf=\" item.isActive\"><button type=\"button\" class=\"btn btn-primary\">{{ item.name }}</button></span>\r\n    <span *ngIf=\" item.isActive\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"Training(item.name)\">START</button></span>\r\n    <label><input type=\"checkbox\" [(ngModel)]=\"item.Completed\" (click)=\"saveUserPreference(item.$key,item.Completed)\">Mark\r\n      as Complete</label>\r\n    <span *ngIf=\"enabled\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"Delete(item.$key)\">Delete</button></span>\r\n    <span *ngIf=\"enabled\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"Modify(item.$key)\">Edit</button></span>\r\n    <!-- <a>{{item.file}}</a> -->\r\n    <a href={{item.file}}>Downloadfile</a>\r\n  </div>\r\n</div>\r\n\r\n<!--<h3>{{item.name}}</h3>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/TrainingModule/trainingmodule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingModuleComponent = /** @class */ (function () {
    function TrainingModuleComponent(dom, db, af, router, dataService, route) {
        var _this = this;
        this.dom = dom;
        this.db = db;
        this.af = af;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.userList = [];
        this.authenticated = false;
        this.enabled = false;
        this.af.authState.subscribe(function (auth) {
            if (auth != null) {
                _this.name = auth.displayName;
                console.log(_this.name);
                localStorage.setItem("username", _this.name);
                localStorage.setItem("useremail", _this.email);
                _this.authenticated = true;
            }
            _this.getUserDetails();
        });
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.videoList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.videoList.push(x);
            });
            console.log(_this.videoList);
        });
    }
    TrainingModuleComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.dataService
            .getuserData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userDetails = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userDetails.push(x);
            });
            console.log(_this.userDetails);
            _this.videoList.forEach(function (v) {
                if (v.ownership === _this.name) {
                    console.log(v.name);
                    console.log(v.ownership);
                    _this.enabled = true;
                }
                var filterList = _this.userDetails.filter(function (a) { return a.Id === v.$key && a.username === _this.name; });
                if (filterList.length > 0) {
                    v.Completed = filterList[0].Completed;
                }
            });
        });
    };
    TrainingModuleComponent.prototype.saveUserPreference = function ($key, Completed) {
        var _this = this;
        var existData = this.userDetails.filter(function (a) { return a.username === _this.name && a.Id === $key; });
        if (existData.length > 0) {
            this.dataService.UpdateuserDataList(existData[0].$key, !Completed);
        }
        else {
            this.db
                .list("/userDetails/")
                .push({ username: this.name, Completed: !Completed, Id: $key });
        }
    };
    TrainingModuleComponent.prototype.Training = function (item) {
        this.router.navigate(["/training/" + item + "/" + item]);
    };
    TrainingModuleComponent.prototype.CheckboxCheck = function ($key, Completed) {
        this.dataService.UpdateVideoList($key, !Completed);
    };
    TrainingModuleComponent.prototype.Modify = function (item) {
        var _this = this;
        this.router.navigate(["/admin/" + item]);
        console.log(item);
        this.key = this.route.snapshot.paramMap.get('key');
        var filter_List = this.videoList.filter(function (v) { return v.username === _this.name; });
        console.log(filter_List);
        if (filter_List.length > 0) {
            console.log(filter_List[0].embed);
            console.log(filter_List[0].embed1);
            console.log(filter_List[0].embed2);
        }
    };
    TrainingModuleComponent.prototype.Delete = function (item) {
        this.dataService.removeData(item);
    };
    TrainingModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/TrainingModule/trainingmodule.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__Services_videoData_service__["a" /* VideoDataService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], TrainingModuleComponent);
    return TrainingModuleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/TrainingModule/traininmodule.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TrainingModuleData; });
/* unused harmony export CompletedUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuizData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocData; });
var TrainingModuleData = /** @class */ (function () {
    function TrainingModuleData() {
    }
    return TrainingModuleData;
}());

var CompletedUser = /** @class */ (function () {
    function CompletedUser() {
    }
    return CompletedUser;
}());

var QuizData = /** @class */ (function () {
    function QuizData() {
    }
    return QuizData;
}());

var DocData = /** @class */ (function () {
    function DocData() {
    }
    return DocData;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__currentwork_currentwork_component__ = __webpack_require__("../../../../../src/app/currentwork/currentwork.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quizzes_quizzes_component__ = __webpack_require__("../../../../../src/app/quizzes/quizzes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_progress_component__ = __webpack_require__("../../../../../src/app/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contributions_contributions_component__ = __webpack_require__("../../../../../src/app/contributions/contributions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__TrainingModule_trainingmodule_component__ = __webpack_require__("../../../../../src/app/TrainingModule/trainingmodule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/Services/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__completed_completed_component__ = __webpack_require__("../../../../../src/app/completed/completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__quizzes_Javaquiz_Javaquiz_component__ = __webpack_require__("../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__quizzes_Angularquiz_Angularquiz_component__ = __webpack_require__("../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__quizzes_Reactquiz_Reactquiz_component__ = __webpack_require__("../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__quizzes_CSSquiz_CSSquiz_component__ = __webpack_require__("../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__quizzes_HTMLquiz_HTMLquiz_component__ = __webpack_require__("../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__TrainingModule_Trainingmaterials_Trainingmaterials_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Trainingmaterials/Trainingmaterials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__TrainingModule_Java_Java_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Java/Java.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__TrainingModule_Angular2_Angular2_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__TrainingModule_Angular2_Angular2_Intro_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_Intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__TrainingModule_Angular2_Angular2_Overview_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_Overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__TrainingModule_Angular2_Angular2_environment_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_environment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__TrainingModule_Angular2_Angular2_video_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__TrainingModule_Angular2_Angular2_file_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__TrainingModule_Angular2_Angular2_architecture_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_architecture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__TrainingModule_Angular2_Angular2_Component_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_Component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__TrainingModule_Angular2_Angular2_directive_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__TrainingModule_Angular2_Angular2_errorhandling_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_errorhandling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__TrainingModule_Angular2_Angular2_form_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__TrainingModule_Angular2_Angular2_modules_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__TrainingModule_Angular2_Angular2_navigation_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__TrainingModule_Angular2_Angular2_routing_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_routing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__TrainingModule_Angular2_Angular2_userinput_component__ = __webpack_require__("../../../../../src/app/TrainingModule/Angular2/Angular2_userinput.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Admin_admin_component__ = __webpack_require__("../../../../../src/app/Admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__Services_ng_boostrap_dropdown_directive__ = __webpack_require__("../../../../../src/app/Services/ng-boostrap-dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__Home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__Login_login_component__["a" /* LoginComponent */] },
    { path: 'training', component: __WEBPACK_IMPORTED_MODULE_17__TrainingModule_trainingmodule_component__["a" /* TrainingModuleComponent */] },
    { path: 'progress', component: __WEBPACK_IMPORTED_MODULE_15__progress_progress_component__["a" /* ProgressComponent */] },
    { path: 'quiz/:name', component: __WEBPACK_IMPORTED_MODULE_14__quizzes_quizzes_component__["a" /* QuizzesComponent */] },
    { path: 'complete', component: __WEBPACK_IMPORTED_MODULE_21__completed_completed_component__["a" /* CompletedComponent */] },
    { path: 'contributions', component: __WEBPACK_IMPORTED_MODULE_16__contributions_contributions_component__["a" /* ContributionsComponent */] },
    { path: 'current', component: __WEBPACK_IMPORTED_MODULE_13__currentwork_currentwork_component__["a" /* CurrentworkComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_44__Admin_admin_component__["a" /* AdminComponent */] },
    { path: 'admin/:key', component: __WEBPACK_IMPORTED_MODULE_44__Admin_admin_component__["a" /* AdminComponent */] },
    { path: 'JavaQuiz', component: __WEBPACK_IMPORTED_MODULE_22__quizzes_Javaquiz_Javaquiz_component__["a" /* JavaquizComponent */] },
    { path: 'AngularQuiz', component: __WEBPACK_IMPORTED_MODULE_23__quizzes_Angularquiz_Angularquiz_component__["a" /* AngularquizComponent */] },
    { path: 'ReactQuiz', component: __WEBPACK_IMPORTED_MODULE_24__quizzes_Reactquiz_Reactquiz_component__["a" /* ReactquizComponent */] },
    { path: 'HTMLQuiz', component: __WEBPACK_IMPORTED_MODULE_26__quizzes_HTMLquiz_HTMLquiz_component__["a" /* HTMLquizComponent */] },
    { path: 'CSSQuiz', component: __WEBPACK_IMPORTED_MODULE_25__quizzes_CSSquiz_CSSquiz_component__["a" /* CSSquizComponent */] },
    { path: 'training/:name', component: __WEBPACK_IMPORTED_MODULE_27__TrainingModule_Trainingmaterials_Trainingmaterials_component__["a" /* TrainingmaterialsComponent */] },
    { path: 'training/:name/Java', component: __WEBPACK_IMPORTED_MODULE_28__TrainingModule_Java_Java_component__["a" /* JavaComponent */] },
    { path: 'training/:name/Angular2', component: __WEBPACK_IMPORTED_MODULE_29__TrainingModule_Angular2_Angular2_component__["a" /* Angular2Component */] },
    { path: 'training/:name/Angular2/Intro', component: __WEBPACK_IMPORTED_MODULE_30__TrainingModule_Angular2_Angular2_Intro_component__["a" /* Angular2IntroComponent */] },
    { path: 'training/:name/Angular2/Intro/overview', component: __WEBPACK_IMPORTED_MODULE_31__TrainingModule_Angular2_Angular2_Overview_component__["a" /* Angular2OverviewComponent */] },
    { path: 'training/:name/Angular2/Intro/environment', component: __WEBPACK_IMPORTED_MODULE_32__TrainingModule_Angular2_Angular2_environment_component__["a" /* Angular2EnvironmentComponent */] },
    { path: 'training/:name/Angular2/video', component: __WEBPACK_IMPORTED_MODULE_33__TrainingModule_Angular2_Angular2_video_component__["a" /* Angular2VideoComponent */] },
    { path: 'training/:name/Angular2/files', component: __WEBPACK_IMPORTED_MODULE_34__TrainingModule_Angular2_Angular2_file_component__["a" /* Angular2FileComponent */] },
    { path: 'training/:name/Angular2/Intro/architecture', component: __WEBPACK_IMPORTED_MODULE_35__TrainingModule_Angular2_Angular2_architecture_component__["a" /* Angular2ArchitectureComponent */] },
    { path: 'training/:name/Angular2/Intro/component', component: __WEBPACK_IMPORTED_MODULE_36__TrainingModule_Angular2_Angular2_Component_component__["a" /* Angular2ComponentComponent */] },
    { path: 'training/:name/Angular2/Intro/directive', component: __WEBPACK_IMPORTED_MODULE_37__TrainingModule_Angular2_Angular2_directive_component__["a" /* Angular2DirectiveComponent */] },
    { path: 'training/:name/Angular2/Intro/errorhandling', component: __WEBPACK_IMPORTED_MODULE_38__TrainingModule_Angular2_Angular2_errorhandling_component__["a" /* Angular2ErrorHandlingComponent */] },
    { path: 'training/:name/Angular2/Intro/form', component: __WEBPACK_IMPORTED_MODULE_39__TrainingModule_Angular2_Angular2_form_component__["a" /* Angular2FormComponent */] },
    { path: 'training/:name/Angular2/Intro/modules', component: __WEBPACK_IMPORTED_MODULE_40__TrainingModule_Angular2_Angular2_modules_component__["a" /* Angular2ModulesComponent */] },
    { path: 'training/:name/Angular2/Intro/navigation', component: __WEBPACK_IMPORTED_MODULE_41__TrainingModule_Angular2_Angular2_navigation_component__["a" /* Angular2NavigationComponent */] },
    { path: 'training/:name/Angular2/Intro/routing', component: __WEBPACK_IMPORTED_MODULE_42__TrainingModule_Angular2_Angular2_routing_component__["a" /* Angular2RoutingComponent */] },
    { path: 'training/:name/Angular2/Intro/userinput', component: __WEBPACK_IMPORTED_MODULE_43__TrainingModule_Angular2_Angular2_userinput_component__["a" /* Angular2UserInputComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__Login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'login' }
];
// export const fireBaseConfig = {
//   apiKey: "AIzaSyADwHpihuPpFcroBEeLTmojCUooCdhxbkk",
//     authDomain: "sportswelfare-d7124.firebaseapp.com",
//     databaseURL: "https://sportswelfare-d7124.firebaseio.com",
//     projectId: "sportswelfare-d7124",
//     storageBucket: "sportswelfare-d7124.appspot.com",
//     messagingSenderId: "335121115507"
// };
var fireBaseConfig = {
    apiKey: "AIzaSyCsnPfIXn_rkAnn7zD55y5HKa5pU88ogOQ",
    authDomain: "software-5bf94.firebaseapp.com",
    databaseURL: "https://software-5bf94.firebaseio.com",
    projectId: "software-5bf94",
    storageBucket: "software-5bf94.appspot.com",
    messagingSenderId: "796233458106"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__currentwork_currentwork_component__["a" /* CurrentworkComponent */],
                __WEBPACK_IMPORTED_MODULE_14__quizzes_quizzes_component__["a" /* QuizzesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__progress_progress_component__["a" /* ProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contributions_contributions_component__["a" /* ContributionsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__TrainingModule_trainingmodule_component__["a" /* TrainingModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_21__completed_completed_component__["a" /* CompletedComponent */],
                __WEBPACK_IMPORTED_MODULE_22__quizzes_Javaquiz_Javaquiz_component__["a" /* JavaquizComponent */],
                __WEBPACK_IMPORTED_MODULE_23__quizzes_Angularquiz_Angularquiz_component__["a" /* AngularquizComponent */],
                __WEBPACK_IMPORTED_MODULE_24__quizzes_Reactquiz_Reactquiz_component__["a" /* ReactquizComponent */],
                __WEBPACK_IMPORTED_MODULE_25__quizzes_CSSquiz_CSSquiz_component__["a" /* CSSquizComponent */],
                __WEBPACK_IMPORTED_MODULE_26__quizzes_HTMLquiz_HTMLquiz_component__["a" /* HTMLquizComponent */],
                __WEBPACK_IMPORTED_MODULE_44__Admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_27__TrainingModule_Trainingmaterials_Trainingmaterials_component__["a" /* TrainingmaterialsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__TrainingModule_Java_Java_component__["a" /* JavaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__TrainingModule_Angular2_Angular2_component__["a" /* Angular2Component */],
                __WEBPACK_IMPORTED_MODULE_30__TrainingModule_Angular2_Angular2_Intro_component__["a" /* Angular2IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_31__TrainingModule_Angular2_Angular2_Overview_component__["a" /* Angular2OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_32__TrainingModule_Angular2_Angular2_environment_component__["a" /* Angular2EnvironmentComponent */],
                __WEBPACK_IMPORTED_MODULE_34__TrainingModule_Angular2_Angular2_file_component__["a" /* Angular2FileComponent */],
                __WEBPACK_IMPORTED_MODULE_33__TrainingModule_Angular2_Angular2_video_component__["a" /* Angular2VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_35__TrainingModule_Angular2_Angular2_architecture_component__["a" /* Angular2ArchitectureComponent */],
                __WEBPACK_IMPORTED_MODULE_36__TrainingModule_Angular2_Angular2_Component_component__["a" /* Angular2ComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_37__TrainingModule_Angular2_Angular2_directive_component__["a" /* Angular2DirectiveComponent */],
                __WEBPACK_IMPORTED_MODULE_38__TrainingModule_Angular2_Angular2_errorhandling_component__["a" /* Angular2ErrorHandlingComponent */],
                __WEBPACK_IMPORTED_MODULE_39__TrainingModule_Angular2_Angular2_form_component__["a" /* Angular2FormComponent */],
                __WEBPACK_IMPORTED_MODULE_40__TrainingModule_Angular2_Angular2_modules_component__["a" /* Angular2ModulesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__TrainingModule_Angular2_Angular2_navigation_component__["a" /* Angular2NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_42__TrainingModule_Angular2_Angular2_routing_component__["a" /* Angular2RoutingComponent */],
                __WEBPACK_IMPORTED_MODULE_43__TrainingModule_Angular2_Angular2_userinput_component__["a" /* Angular2UserInputComponent */],
                __WEBPACK_IMPORTED_MODULE_46__Services_ng_boostrap_dropdown_directive__["a" /* NgBoostrapDropdownDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__Services_auth_gaurd_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_45__Services_videoData_service__["a" /* VideoDataService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["a" /* AngularFireStorage */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/completed/completed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/completed/completed.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main\">\n  <div class=\"card card-body bg-light\">Completed Trainings</div>\n  <div class=\"row\" style=\"Padding:10px\">\n    <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-4\" style=\"margin-right: 25px; background-color:tomato\">Training\n      Modules</a>\n    <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" style=\"margin-right: 25px; background-color:tomato\">Status</a>\n    <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" style=\"margin-right: 25px; background-color:tomato\">Score</a>\n  </div>\n  <div>\n    <div class=\"row\" style=\"Padding:2px\" *ngFor=\"let x of videoList\">\n      <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-4\" *ngIf=\"x.Completed && x.isActive\" style=\"margin-right: 25px;\">{{x.name}}</a>\n      <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" *ngIf=\"x.Completed && x.isActive\" style=\"margin-right: 25px;\">Completed</a>\n      <a href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" *ngIf=\"x.Completed && x.isActive\" style=\"margin-right: 25px;\">{{x.score}}</a>\n      <a [routerLink]=\"['/training']\" class=\"btn btn-primary col-sm-2\" *ngIf=\"x.Completed && x.isActive\">Reload</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/completed/completed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompletedComponent = /** @class */ (function () {
    function CompletedComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.videoList = [];
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.videoList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.videoList.push(x);
            });
            _this.getUserDetails();
        });
    }
    CompletedComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.dataService
            .getuserData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userDetails = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userDetails.push(x);
            });
            console.log(_this.userDetails);
            _this.videoList.forEach(function (v) {
                var filterList = _this.userDetails.filter(function (a) {
                    return a.Id === v.$key && a.username === localStorage.getItem("username");
                });
                if (filterList.length > 0) {
                    v.Completed = filterList[0].Completed;
                }
            });
            _this.getUserScoreDetails();
        });
    };
    CompletedComponent.prototype.getUserScoreDetails = function () {
        var _this = this;
        this.dataService
            .getUserScoreData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userScoreData = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userScoreData.push(x);
            });
            console.log(_this.userScoreData);
            _this.videoList.forEach(function (v) {
                var filterList = _this.userScoreData.filter(function (a) {
                    return a.Id === v.$key && a.username === localStorage.getItem("username");
                });
                if (filterList.length > 0) {
                    v.score = filterList[0].score;
                }
            });
        });
    };
    CompletedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-completed",
            template: __webpack_require__("../../../../../src/app/completed/completed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/completed/completed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__["a" /* VideoDataService */]])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contributions/contributions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contributions/contributions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main\">\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contributions/contributions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContributionsComponent = /** @class */ (function () {
    function ContributionsComponent() {
    }
    ContributionsComponent.prototype.ngOnInit = function () {
    };
    ContributionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contributions',
            template: __webpack_require__("../../../../../src/app/contributions/contributions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contributions/contributions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContributionsComponent);
    return ContributionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/currentwork/currentwork.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currentwork/currentwork.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<div class=\"main\">\n    <div class=\"card card-body bg-light\">Pending Trainings</div>\n    <div class=\"row\"style=\"Padding:10px\">\n      <fieldset style=\"margin-right: 25px; background-color:tomato\">Training Modules</fieldset>\n      <a  href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" style=\"margin-right: 25px; background-color:tomato\">Status</a>\n    </div>\n    <div class=\"row\" style=\"Padding:2px\" *ngFor=\"let x of videoList\">\n        <a  href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-4\" *ngIf=\"!x.Completed && x.isActive\" style=\"margin-right: 25px;\">{{x.name}}</a>\n        <a  href=\"javascript:void(0)\" class=\"btn btn-primary col-sm-2\" *ngIf=\"!x.Completed && x.isActive\" style=\"margin-right: 25px;\">Pending</a>\n        <a [routerLink]=\"['/training']\" class=\"btn btn-primary col-sm-2\" *ngIf=\"!x.Completed && x.isActive\">Resume</a>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/currentwork/currentwork.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentworkComponent = /** @class */ (function () {
    function CurrentworkComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.videoList = [];
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.videoList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.videoList.push(x);
            });
            _this.getUserDetails();
        });
    }
    CurrentworkComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.dataService
            .getuserData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userDetails = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userDetails.push(x);
            });
            console.log(_this.userDetails);
            _this.videoList.forEach(function (v) {
                var filterList = _this.userDetails.filter(function (a) { return a.Id === v.$key && a.username === localStorage.getItem("username"); });
                if (filterList.length > 0) {
                    v.Completed = filterList[0].Completed;
                }
            });
        });
    };
    CurrentworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-currentwork",
            template: __webpack_require__("../../../../../src/app/currentwork/currentwork.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currentwork/currentwork.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__["a" /* VideoDataService */]])
    ], CurrentworkComponent);
    return CurrentworkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 300px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 20;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n    font-family: cursive;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 24px;\r\n    color: #818181;\r\n    display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n    margin-left: 300px; /* Same as the width of the sidenav */\r\n    font-size: 14px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\np{\r\n    padding-top: 30px;\r\n    font-family: cursive;\r\n}\r\n\r\nh1{\r\n    text-align: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-inverse\" style=\"font-size: 18px; background-color:yellow\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Hi {{name}}</a>\n      </div>-->\n    <!--<div class=\"sidenav\" style=\"font-size: 12px\" >\n  <li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>\n<li><a [routerLink]=\"['/home']\">HOME</a></li>\n<li><a [routerLink]=\"['/admin']\">Admin</a></li>\n<li><a [routerLink]=\"['/training']\">Training Modules</a></li>\n<li><a [routerLink]=\"['/complete']\">Completed Trainings</a></li>\n<li><a [routerLink]=\"['/current']\">Pending Trainings</a></li>\n<li><a [routerLink]=\"['/progress']\">Progress</a></li>\n<li><a [routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\n  </ul>\n</div>-->\n<!--</nav>-->\n\n<!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">-->\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\">Hi {{name}}</a>\n  <ul class=\"nav nav-tabs\">\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\n  <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/home']\">HOME</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Publish</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training']\">Training Modules</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/complete']\">Completed Trainings</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/current']\">Pending Trainings</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/progress']\">Progress</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\n  </ul>\n</nav>\n<div class=\"container text-center\">    \n  <div class=\"row\">\n    <div class=\"col-sm-3 well\">\n      <div class=\"well\">\n        <p><a href=\"javascript:void(0)\">Hi {{name}}</a></p>\n        <img src=\"http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg\" class=\"img-circle\" height=\"65\" width=\"65\" alt=\"Avatar\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, af) {
        this.router = router;
        this.af = af;
        this.name = localStorage.getItem("username");
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        this.af.auth.signOut();
        this.router.navigate(['login']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progress/progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n}\r\n#center{\r\n    text-align: center;\r\n}\r\n.main {\r\n    margin-left: 300px; /* Same as the width of the sidenav */\r\n    font-size: 18px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\nli{\r\n    font-family: cursive;\r\n}\r\n.left-div\r\n{\r\n  display: inline-block;\r\n  max-width: 300px;\r\n  text-align: left;\r\n  padding: 30px;\r\n  background-color: #ddd;\r\n  border-radius: 3px;\r\n  margin: 15px;\r\n  vertical-align: top;\r\n}\r\n.right-div\r\n{\r\n  display: inline-block;\r\n  max-width: 150px;\r\n  text-align: left;\r\n  padding: 30px;\r\n  background-color: #ddd;\r\n  border-radius: 3px;\r\n  margin: 15px;\r\n}\r\n.left-text, .right-text\r\n{\r\n  font: 16px 'Courier New', monospace;\r\n\tcolor: #000;\r\n}\r\n@media screen and (max-width: 600px) \r\n{\r\n  .left-div, .right-div\r\n    {\r\n       max-width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main\">\n<div class=\"card card-body bg-light\">Progress</div>\n<br>\n<p class=\"alert alert-info col-sm-6\">\n  Number of courses Completed :{{trainingCom}}\n  <!--<span *ngIf=\"item.embed && item.isActive\">-->\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"course_Completed()\" >View courses</button>\n  <div id=\"demo\" *ngFor='let course of completed_course'>\n    <span *ngIf=\"this.completed_course != NULL && completedCourse\"><button type=\"button\" class=\"btn btn-primary\">{{course}}</button></span>\n  </div>\n\n<p class=\"alert alert-danger col-sm-6\">\n  Number of  Ongoing  Pending :{{trainingpen}}\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"course_Pending()\" >View courses</button>\n  <div id=\"demo\" *ngFor='let course_pending of pending_course'>\n    <span *ngIf=\"this.pending_course != NULL && pendingCourse\"><button type=\"button\" class=\"btn btn-primary\">{{course_pending}}</button></span>\n  </div>\n\n<p class=\"alert alert-info col-sm-6\">\n  Number of Quizes Completed :{{quizCounter}}\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"course_Completed_Quiz()\" >View courses</button>\n  <div id=\"demo\" *ngFor='let completed_quiz of completed_course_quiz'>\n    <span *ngIf=\"this.completed_course_quiz != NULL && completedCourseQuiz\"><button type=\"button\" class=\"btn btn-primary\">{{completed_quiz}}</button></span>\n  </div>\n\n<p class=\"alert alert-danger col-sm-6\">\n    Number of Quizes Pending :{{quizPending}}\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"course = course_Pending_Quiz()\">View courses</button>\n    <div id=\"demo\" *ngFor='let pending_quiz of pending_course_quiz'>\n      <span *ngIf=\"this.pending_course_quiz != NULL && pendingCourseQuiz\"><button type=\"button\" class=\"btn btn-primary\">{{pending_quiz}}</button></span>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.trainingpen = 0;
        this.trainingCom = 0;
        this.quizPending = 0;
        this.quizCounter = 0;
        this.videoList = [];
        this.completed_course = [];
        this.pending_course = [];
        this.completed_course_quiz = [];
        this.pending_course_quiz = [];
        this.completedCourse = false;
        this.pendingCourse = false;
        this.completedCourseQuiz = false;
        this.pendingCourseQuiz = false;
        this.trainingCom = 0;
        this.trainingpen = 0;
        this.quizCounter = 0;
        this.quizPending = 0;
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.videoList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.videoList.push(x);
            });
            _this.getUserDetails();
        });
    }
    ProgressComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.dataService
            .getuserData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userDetails = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userDetails.push(x);
            });
            console.log(_this.userDetails);
            _this.videoList.forEach(function (v) {
                var filterList = _this.userDetails.filter(function (a) {
                    return a.Id === v.$key && a.username === localStorage.getItem("username");
                });
                if (filterList.length > 0) {
                    v.Completed = filterList[0].Completed;
                }
                v.Completed ? _this.trainingCom++ : _this.trainingpen++;
                v.isQCompleted ? _this.quizCounter++ : _this.quizPending++;
                if (!v.Completed) {
                    _this.pending_course.push(v.name);
                }
                else {
                    _this.completed_course.push(v.name);
                }
                if (!v.isQCompleted) {
                    _this.pending_course_quiz.push(v.name);
                }
                else {
                    _this.completed_course_quiz.push(v.name);
                }
            });
        });
    };
    //course_Completed(){
    //this.completed_course.forEach(element => {
    //if()
    //});
    //}
    //course_Completed(){
    //<div *ngFor='let course of completed_course'>
    //<li> >{{ course }}</li>
    //</div>
    //}
    ProgressComponent.prototype.course_Completed = function () {
        var _this = this;
        this.completed_course.forEach(function (element) {
            _this.course1 = _this.completed_course;
            console.log("hello");
            console.log(_this.course1);
            _this.completedCourse = true;
        });
        //}
        //this.course =this.completed_course.name
    };
    ProgressComponent.prototype.course_Pending = function () {
        var _this = this;
        this.pending_course.forEach(function (element) {
            _this.course2 = _this.pending_course;
            console.log("hello");
            console.log(_this.course2);
            _this.pendingCourse = true;
        });
    };
    ProgressComponent.prototype.course_Completed_Quiz = function () {
        var _this = this;
        this.completed_course_quiz.forEach(function (element) {
            _this.course3 = _this.completed_course_quiz;
            console.log("hello");
            console.log(_this.course3);
            _this.completedCourseQuiz = true;
        });
        //}
        //this.course =this.completed_course.name
    };
    ProgressComponent.prototype.course_Pending_Quiz = function () {
        var _this = this;
        this.pending_course_quiz.forEach(function (element) {
            _this.course4 = _this.pending_course_quiz;
            console.log("hello");
            console.log(_this.course4);
            _this.pendingCourseQuiz = true;
            //return this.course4;
        });
    };
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-progress",
            template: __webpack_require__("../../../../../src/app/progress/progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_videoData_service__["a" /* VideoDataService */]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-menu></app-menu>\n  <div class=\"main\">\n    <h1>Angular Quiz</h1>\n      <p class=\"question\">1. Which of the following is true about ng-app directive?</p>\n      <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1a\" id=\"q1a\" name=\"q1\"><label for=\"q1a\">ng-app directive defines and links an AngularJS application to HTML.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1b\" id=\"q1b\"  name=\"q1\"><label for=\"q1b\">ng-app directive indicates the start of the application.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1c\" id=\"q1c\"  name=\"q1\"><label for=\"q1c\">Both of the above.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1d\" id=\"q1d\" name=\"q1\" ><label for=\"q1d\">None of the above.</label><br/>\n      </ul>\n      <p class=\"question\">2. Which of the following is true about lowercase filter?</p>\n      <ul class=\"answers1\">\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2a\" id=\"q2a\" name=\"q2\"><label for=\"q2a\">Lowercase filter converts a text to lower case text.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2b\" id=\"q2b\" name=\"q2\"><label for=\"q2b\">Lowercase filter is a function which takes text as input.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2c\" id=\"q2c\" name=\"q2\"><label for=\"q2c\">Both of the above.</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2d\" id=\"q2d\" name=\"q2\"><label for=\"q2d\">None of the above.</label><br/>\n      </ul>\n      <p class=\"question\">3. $http service is used to make an Ajax call to server?</p>\n      <ul class=\"answers\">\n        <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\" name=\"q3\"><label for=\"q2a\">False</label><br/>\n        <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3b\" id=\"q3b\" name=\"q3\"><label for=\"q2b\">True</label><br/>\n      </ul>\n      <p class=\"question\">4.Using service method, we define a service and then assign method to it?</p>\n      <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4a\" id=\"q4a\"  name=\"q4\"><label for=\"q4a\">True</label><br/>\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4b\" id=\"q4b\"  name=\"q4\"><label for=\"q4b\">False</label><br/>\n      </ul>\n   <button class=\"btn btn-default\" (click)=\"SubmitClick()\">Submit</button>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularquizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularquizComponent = /** @class */ (function () {
    function AngularquizComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    AngularquizComponent.prototype.ngOnInit = function () {
    };
    AngularquizComponent.prototype.SubmitClick = function () {
        if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
            if (this.q1 == "1c") {
                this.counter += 1;
            }
            if (this.q2 == "2a") {
                this.counter += 1;
            }
            if (this.q3 == "3b") {
                this.counter += 1;
            }
            if (this.q4 == "4a") {
                this.counter += 1;
            }
            localStorage.setItem("AngularScore", this.counter.toString());
            alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
            this.router.navigate(['/quiz']);
        }
        else {
            alert("Please answer all questions to submit");
        }
    };
    AngularquizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'Angularquiz',
            template: __webpack_require__("../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/Angularquiz/Angularquiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AngularquizComponent);
    return AngularquizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-menu></app-menu>\n<div class=\"main\">\n  <h1>CSS Quiz</h1>\n  <p class=\"question\">Which of the following is correct about CSS?</p>\n  <ul class=\"answers\">\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1a\" id=\"q1a\" name=\"q1\">\n    <label for=\"q1a\">Style sheets allow content to be optimized for more than one type of device.</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1b\" id=\"q1b\" name=\"q1\">\n    <label for=\"q1b\">CSS can store web applications locally with the help of an offline catche.</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1c\" id=\"q1c\" name=\"q1\">\n    <label for=\"q1c\">Using CSS, we can view offline websites.The cache also ensures faster loading and better overall performance of the website.</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1d\" id=\"q1d\" name=\"q1\">\n    <label for=\"q1d\"> All of the above.</label>\n    <br/>\n  </ul>\n  <p class=\"question\">2.What does CSS stand for?</p>\n  <ul class=\"answers1\">\n    <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2a\" id=\"q2a\" name=\"q2\">\n    <label for=\"q2a\">Cascading Style Sheets</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2b\" id=\"q2b\" name=\"q2\">\n    <label for=\"q2b\">Computer Style Sheets</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2c\" id=\"q2c\" name=\"q2\">\n    <label for=\"q2c\">Colorful Style Sheets</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2d\" id=\"q2d\" name=\"q2\">\n    <label for=\"q2d\">Creative Style Sheets</label>\n    <br/>\n  </ul>\n  <p class=\"question\">3. Where in an HTML document is the correct place to refer to an external style sheet?</p>\n  <ul class=\"answers1\">\n    <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\" name=\"q3\">\n    <label for=\"q3a\">At the end of the document</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3b\" id=\"q3b\" name=\"q3\">\n    <label for=\"q3b\">In the body section</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3c\" id=\"q3c\" name=\"q3\">\n    <label for=\"q3c\">In the head section</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3d\" id=\"q3d\" name=\"q3\">\n    <label for=\"q3d\">All of the above</label>\n    <br/>\n  </ul>\n  <p class=\"question\">4.Which HTML attribute is used to define inline styles?</p>\n  <ul class=\"answers1\">\n    <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4a\" id=\"q4a\" name=\"q4\">\n    <label for=\"q4a\">Class</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4b\" id=\"q4b\" name=\"q4\">\n    <label for=\"q4b\">Styles</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4c\" id=\"q4c\" name=\"q4\">\n    <label for=\"q4c\">Font</label>\n    <br/>\n    <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4d\" id=\"q4d\" name=\"q4\">\n    <label for=\"q4d\">Style</label>\n    <br/>\n  </ul>\n\n  <button class=\"btn btn-default\" (click)=\"SubmitClick()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSquizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CSSquizComponent = /** @class */ (function () {
    function CSSquizComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    CSSquizComponent.prototype.ngOnInit = function () {
    };
    CSSquizComponent.prototype.SubmitClick = function () {
        if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
            if (this.q1 == "1d") {
                this.counter += 1;
            }
            if (this.q2 == "2a") {
                this.counter += 1;
            }
            if (this.q3 == "3c") {
                this.counter += 1;
            }
            if (this.q4 == "4d") {
                this.counter += 1;
            }
            localStorage.setItem("CSSScore", this.counter.toString());
            alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
            this.router.navigate(['/quiz']);
        }
        else {
            alert("Please answer all questions to submit");
        }
    };
    CSSquizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-CSSquiz',
            template: __webpack_require__("../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/CSSquiz/CSSquiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CSSquizComponent);
    return CSSquizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-menu></app-menu>\n  <div class=\"main\">\n    <h1>HTML Quiz</h1>\n    <p class=\"question\">1. The abbreviation of HTML is?</p>\n    <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1a\" id=\"q1a\" name=\"q1\">\n      <label for=\"q1a\">Hyper Text Module Language</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1b\" id=\"q1b\" name=\"q1\">\n      <label for=\"q1b\">Hyper Text Markup Language</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1c\" id=\"q1c\" name=\"q1\">\n      <label for=\"q1c\">Hyper Test Markup Language</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1d\" id=\"q1d\" name=\"q1\">\n      <label for=\"q1d\">Hyperlink Markup Language</label>\n      <br/>\n    </ul>\n    <p class=\"question\">2. H3 is the biggest header tag.</p>\n    <ul class=\"answers1\">\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2a\" id=\"q2a\" name=\"q2\">\n      <label for=\"q2a\">True</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2b\" id=\"q2b\" name=\"q2\">\n      <label for=\"q2b\">False</label>\n      <br/>\n    </ul>\n    <p class=\"question\">3. What is the HTML attribute to reference the location of an image inside the image tag?</p>\n    <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\" name=\"q3\">\n      <label for=\"q3a\">src</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3b\" id=\"q3b\" name=\"q3\">\n      <label for=\"q3b\">href</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3c\" id=\"q3c\" name=\"q3\">\n      <label for=\"q3c\">link</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3d\" id=\"q3d\" name=\"q3\">\n      <label for=\"q3d\">location</label>\n      <br/>\n    </ul>\n    <p class=\"question\">4.Which is not an HTML attribute?</p>\n    <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\" name=\"q3\">\n      <label for=\"q3a\">alt</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3b\" id=\"q3b\" name=\"q3\">\n      <label for=\"q3b\">target</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3c\" id=\"q3c\" name=\"q3\">\n      <label for=\"q3c\">fontSize</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3d\" id=\"q3d\" name=\"q3\">\n      <label for=\"q3d\">id</label>\n      <br/>\n    </ul>\n    <button class=\"btn btn-default\" (click)=\"SubmitClick()\">Submit</button>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTMLquizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HTMLquizComponent = /** @class */ (function () {
    function HTMLquizComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    HTMLquizComponent.prototype.ngOnInit = function () {
    };
    HTMLquizComponent.prototype.SubmitClick = function () {
        if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
            if (this.q1 == "1b") {
                this.counter += 1;
            }
            if (this.q2 == "2b") {
                this.counter += 1;
            }
            if (this.q3 == "3a") {
                this.counter += 1;
            }
            if (this.q4 == "4c") {
                this.counter += 1;
            }
            localStorage.setItem("HTMLScore", this.counter.toString());
            alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
            this.router.navigate(['/quiz']);
        }
        else {
            alert("Please answer all questions to submit");
        }
    };
    HTMLquizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-HTMLquiz',
            template: __webpack_require__("../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/HTMLquiz/HTMLquiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HTMLquizComponent);
    return HTMLquizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-menu></app-menu>\n  <div class=\"main\">\n    <h1>Java Quiz</h1>\n    <p class=\"question\">1.How will you print in JAVA?</p>\n    <ul class=\"answers\">\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1a\" id=\"q1a\" name=\"q1\">\n      <label for=\"q1a\">System.out.println ( )</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1b\" id=\"q1b\" name=\"q1\">\n      <label for=\"q1b\">System ( )</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1c\" id=\"q1c\" name=\"q1\">\n      <label for=\"q1c\">console.log ( )</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1d\" id=\"q1d\" name=\"q1\">\n      <label for=\"q1d\">System.out</label>\n      <br/>\n    </ul>\n    <p class=\"question\">2.Which constructor initializes the object with the current date and time?</p>\n    <ul class=\"answers1\">\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2a\" id=\"q2a\" name=\"q2\">\n      <label for=\"q2a\">Time()</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2b\" id=\"q2b\" name=\"q2\">\n      <label for=\"q2b\">Seconds()</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2c\" id=\"q2c\" name=\"q2\">\n      <label for=\"q2c\">Date( )</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q2\" value=\"2d\" id=\"q2d\" name=\"q2\">\n      <label for=\"q2d\">Minutes()</label>\n      <br/>\n    </ul>\n    <p class=\"question\">3.Which of the following stands true about default modifier of class members?</p>\n    <ul class=\"answers1\">\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\" name=\"q3\">\n      <label for=\"q3a\">By default, variables, methods and constructors can be accessed by subclass only</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3b\" id=\"q3b\" name=\"q3\">\n      <label for=\"q3b\">By default, variables, methods and constructors can be accessed by any class lying in any package</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3c\" id=\"q3c\" name=\"q3\">\n      <label for=\"q3c\">By default, variables, methods and constructors can be accessed by any class lying in the same package</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q3\" value=\"3d\" id=\"q3d\" name=\"q3\">\n      <label for=\"q3d\">None of the above</label>\n      <br/>\n    </ul>\n    <p class=\"question\">4.What is an Interface?</p>\n    <ul class=\"answers1\">\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4a\" id=\"q4a\" name=\"q4\">\n      <label for=\"q4a\">An interface is a collection of abstract methods</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4b\" id=\"q4b\" name=\"q4\">\n      <label for=\"q4b\">Interface is an abstract class</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4c\" id=\"q4c\" name=\"q4\">\n      <label for=\"q4c\">Interface is an concrete class</label>\n      <br/>\n      <input type=\"radio\" [(ngModel)]=\"q4\" value=\"4d\" id=\"q4d\" name=\"q4\">\n      <label for=\"q4d\">None of the above</label>\n      <br/>\n    </ul>\n    <button class=\"btn btn-default\" (click)=\"SubmitClick()\">Submit</button>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JavaquizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JavaquizComponent = /** @class */ (function () {
    function JavaquizComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    JavaquizComponent.prototype.ngOnInit = function () {
    };
    JavaquizComponent.prototype.SubmitClick = function () {
        console.log(this.q1);
        if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
            if (this.q1 == "1c") {
                this.counter += 1;
            }
            if (this.q2 == "2c") {
                this.counter += 1;
            }
            if (this.q3 == "3c") {
                this.counter += 1;
            }
            if (this.q4 == "4c") {
                this.counter += 1;
            }
            localStorage.setItem("JavaScore", this.counter.toString());
            alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
            this.router.navigate(['/quiz']);
        }
        else {
            alert("Please answer all questions to submit");
        }
    };
    JavaquizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Javaquiz',
            template: __webpack_require__("../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/Javaquiz/Javaquiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], JavaquizComponent);
    return JavaquizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main\">\n  <h1>React Quiz</h1>\n    <p class=\"question\">1.ReactJS focuses on which of the following part when considering MVC?</p>\n    <ul class=\"answers\">\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1a\" id=\"q1a\"  name=\"q1\"><label for=\"q1a\">M (Model)</label><br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1b\" id=\"q1b\"  name=\"q1\"><label for=\"q1b\">V (view)</label><br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1c\" id=\"q1c\"  name=\"q1\"><label for=\"q1c\">C (controller)</label><br/>\n    <input type=\"radio\" [(ngModel)]=\"q1\" value=\"1d\" id=\"q1d\"  name=\"q1\"><label for=\"q1d\">All of the above</label><br/>\n    </ul>\n    <p class=\"question\">2.Which of the following concepts is/are key to ReactJS</p>\n<ul class=\"answers1\">\n<input type=\"radio\" [(ngModel)]=\"q2\" value=\"2a\" id=\"q2a\" name=\"q2\"><label for=\"q2a\">Component-oriented design</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q2\" value=\"2b\" id=\"q2b\" name=\"q2\"><label for=\"q2b\">Event delegation model</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q2\" value=\"2c\" id=\"q2c\" name=\"q2\"><label for=\"q2c\">Both of the above</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q2\" value=\"2d\" id=\"q2d\" name=\"q2\"><label for=\"q2d\">None of the above</label><br/>\n</ul>\n<p class=\"question\">3.ReactJS is an MVC based framework?</p>\n<ul class=\"answers\">\n<input type=\"radio\" [(ngModel)]=\"q3\" value=\"3a\" id=\"q3a\"  name=\"q3\"><label for=\"q3a\">True</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q3\" value=\"3d\" id=\"q3d\"  name=\"q3\"><label for=\"q3d\">False</label><br/>\n</ul>\n<p class=\"question\">4.Which of the following API is a MUST for every ReactJS component?</p>\n<ul class=\"answers\">\n<input type=\"radio\" [(ngModel)]=\"q4\" value=\"4a\" id=\"q4a\" name=\"q4\"><label for=\"q4a\">getInitialState</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q4\" value=\"4b\" id=\"q4b\" name=\"q4\"><label for=\"q4b\">render</label><br/>\n<input type=\"radio\" [(ngModel)]=\"q4\" value=\"4c\" id=\"q4c\" name=\"q4\"><label for=\"q4c\">renderComponent</label><br/>\n</ul>\n<button class=\"btn btn-default\" (click)=\"SubmitClick()\">Submit</button>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactquizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactquizComponent = /** @class */ (function () {
    function ReactquizComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    ReactquizComponent.prototype.ngOnInit = function () {
    };
    ReactquizComponent.prototype.SubmitClick = function () {
        if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
            if (this.q1 == "1b") {
                this.counter += 1;
            }
            if (this.q2 == "2c") {
                this.counter += 1;
            }
            if (this.q3 == "3b") {
                this.counter += 1;
            }
            if (this.q4 == "4b") {
                this.counter += 1;
            }
            localStorage.setItem("ReactScore", this.counter.toString());
            alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
            this.router.navigate(['/quiz']);
        }
        else {
            alert("Please answer all questions to submit");
        }
    };
    ReactquizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Reactquiz',
            template: __webpack_require__("../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/Reactquiz/Reactquiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ReactquizComponent);
    return ReactquizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<nav class=\"navbar navbar-inverse bg-dark navbar-dark\">\n  <ul class=\"navbar-nav\">\n    <!--<li><a href=\"javascript:void(0)\">Hi {{name}}</a></li>-->\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2']\">HOME</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/Intro']\">Modules</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" (click)=Quiz(this.videodata1[0].name)>Quizzes</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/training/Angular2/Angular2/video']\">Videos</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/training/Angular2/Angular2/files']\">Files</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\"[routerLink]=\"['/login']\" (click)=logout()>LogOut</a></li>\n  </ul>\n</nav>\n<div class='main' *ngIf=\"filterdData[0]\">\n  <h1> {{filterdData[0].name}} Quiz</h1>\n  <p class='question'>{{filterdData[0].question1}}</p>\n\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q1' value='a' id='qa1'  name='q1'><label for='q1a'>{{filterdData[0].Opta1}}</label><br/>\n  <input type='radio' [(ngModel)]='q1' value='b' id='qb1'  name='q1'><label for='q1b'>{{filterdData[0].Optb1}}</label><br/>\n  <input type='radio' [(ngModel)]='q1' value='c' id='qc1'  name='q1'><label for='q1c'>{{filterdData[0].Optc1}}</label><br/>\n  <input type='radio' [(ngModel)]='q1' value='d' id='qd1'  name='q1'><label for='q1d'>{{filterdData[0].Optd1}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question2}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q2' value='a' id='qa2'  name='q2'><label for='q2a'>{{filterdData[0].Opta2}}</label><br/>\n  <input type='radio' [(ngModel)]='q2' value='b' id='qb2'  name='q2'><label for='q2b'>{{filterdData[0].Optb2}}</label><br/>\n  <input type='radio' [(ngModel)]='q2' value='c' id='qc2'  name='q2'><label for='q2c'>{{filterdData[0].Optc2}}</label><br/>\n  <input type='radio' [(ngModel)]='q2' value='d' id='qd2'  name='q2'><label for='q2d'>{{filterdData[0].Optd2}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question3}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q3' value='a' id='qa3'  name='q3'><label for='q3a'>{{filterdData[0].Opta3}}</label><br/>\n  <input type='radio' [(ngModel)]='q3' value='b' id='qb3'  name='q3'><label for='q3b'>{{filterdData[0].Optb3}}</label><br/>\n  <input type='radio' [(ngModel)]='q3' value='c' id='qc3'  name='q3'><label for='q3c'>{{filterdData[0].Optc3}}</label><br/>\n  <input type='radio' [(ngModel)]='q3' value='d' id='qd3'  name='q3'><label for='q3d'>{{filterdData[0].Optd3}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question4}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q4' value='a' id='qa4'  name='q4'><label for='q4a'>{{filterdData[0].Opta4}}</label><br/>\n  <input type='radio' [(ngModel)]='q4' value='b' id='qb4'  name='q4'><label for='q4b'>{{filterdData[0].Optb4}}</label><br/>\n  <input type='radio' [(ngModel)]='q4' value='c' id='qc4'  name='q4'><label for='q4c'>{{filterdData[0].Optc4}}</label><br/>\n  <input type='radio' [(ngModel)]='q4' value='d' id='qd4'  name='q4'><label for='q4d'>{{filterdData[0].Optd4}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question5}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q5' value='a' id='qa5'  name='q5'><label for='q5a'>{{filterdData[0].Opta5}}</label><br/>\n  <input type='radio' [(ngModel)]='q5' value='b' id='qb5'  name='q5'><label for='q5b'>{{filterdData[0].Optb5}}</label><br/>\n  <input type='radio' [(ngModel)]='q5' value='c' id='qc5'  name='q5'><label for='q5c'>{{filterdData[0].Optc5}}</label><br/>\n  <input type='radio' [(ngModel)]='q5' value='d' id='qd5'  name='q5'><label for='q5d'>{{filterdData[0].Optd5}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question6}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q6' value='a' id='qa6'  name='q6'><label for='q6a'>{{filterdData[0].Opta6}}</label><br/>\n  <input type='radio' [(ngModel)]='q6' value='b' id='qb6'  name='q6'><label for='q6b'>{{filterdData[0].Optb6}}</label><br/>\n  <input type='radio' [(ngModel)]='q6' value='c' id='qc6'  name='q6'><label for='q6c'>{{filterdData[0].Optc6}}</label><br/>\n  <input type='radio' [(ngModel)]='q6' value='d' id='qd6'  name='q6'><label for='q6d'>{{filterdData[0].Optd6}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question7}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q7' value='a' id='qa7'  name='q7'><label for='q7a'>{{filterdData[0].Opta7}}</label><br/>\n  <input type='radio' [(ngModel)]='q7' value='b' id='qb7'  name='q7'><label for='q7b'>{{filterdData[0].Optb7}}</label><br/>\n  <input type='radio' [(ngModel)]='q7' value='c' id='qc7'  name='q7'><label for='q7c'>{{filterdData[0].Optc7}}</label><br/>\n  <input type='radio' [(ngModel)]='q7' value='d' id='qd7'  name='q7'><label for='q7d'>{{filterdData[0].Optd7}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question8}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q8' value='a' id='qa8'  name='q8'><label for='q8a'>{{filterdData[0].Opta8}}</label><br/>\n  <input type='radio' [(ngModel)]='q8' value='b' id='qb8'  name='q8'><label for='q8b'>{{filterdData[0].Optb8}}</label><br/>\n  <input type='radio' [(ngModel)]='q8' value='c' id='qc8'  name='q8'><label for='q8c'>{{filterdData[0].Optc8}}</label><br/>\n  <input type='radio' [(ngModel)]='q8' value='d' id='qd8'  name='q8'><label for='q8d'>{{filterdData[0].Optd8}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question9}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q9' value='a' id='qa9'  name='q9'><label for='q9a'>{{filterdData[0].Opta9}}</label><br/>\n  <input type='radio' [(ngModel)]='q9' value='b' id='qb9'  name='q9'><label for='q9b'>{{filterdData[0].Optb9}}</label><br/>\n  <input type='radio' [(ngModel)]='q9' value='c' id='qc9'  name='q9'><label for='q9c'>{{filterdData[0].Optc9}}</label><br/>\n  <input type='radio' [(ngModel)]='q9' value='d' id='qd9'  name='q9'><label for='q9d'>{{filterdData[0].Optd9}}</label><br/>\n  </ul>\n  <p class='question'>{{filterdData[0].question10}}</p>\n  <ul class='answers'>\n  <input type='radio' [(ngModel)]='q10' value='a' id='qa10'  name='q10'><label for='q10a'>{{filterdData[0].Opta10}}</label><br/>\n  <input type='radio' [(ngModel)]='q10' value='b' id='qb10'  name='q10'><label for='q10b'>{{filterdData[0].Optb10}}</label><br/>\n  <input type='radio' [(ngModel)]='q10' value='c' id='qc10'  name='q10'><label for='q10c'>{{filterdData[0].Optc10}}</label><br/>\n  <input type='radio' [(ngModel)]='q10' value='d' id='qd10'  name='q10'><label for='q10d'>{{filterdData[0].Optd10}}</label><br/>\n  </ul>\n  <button class=\"btn btn-default\" (click)=\"SubmitClick(filterdData[0].$key)\">Submit</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__ = __webpack_require__("../../../../../src/app/Services/videoData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TrainingModule_traininmodule_class__ = __webpack_require__("../../../../../src/app/TrainingModule/traininmodule.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizzesComponent = /** @class */ (function () {
    function QuizzesComponent(router, route, db, dataService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.dataService = dataService;
        this.newData = [];
        this.videoList = [];
        this.score = 0;
        this.filterdData = [];
        this.item = new __WEBPACK_IMPORTED_MODULE_4__TrainingModule_traininmodule_class__["c" /* TrainingModuleData */]();
        this.test = [];
        this.key = "";
        this.filterData = this.db.list("/newCourse");
        this.items = this.db.list("/newCourse");
        this.dataService
            .getVideoData()
            .snapshotChanges()
            .subscribe(function (item) {
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                console.log(x);
                x["$key"] = element.key;
                _this.videoList.push(x);
                console.log(_this.videoList);
                // this.param = this.route.snapshot.paramMap.get('name');
                // this.filterdData = [];
                // this.videoList.forEach(v => {
                //   if (v.name === this.param) {
                //     this.filterdData.push(v);
                //   }
                // });
            });
            _this.getUserDetails();
        });
    }
    QuizzesComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.dataService
            .getUserScoreData()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.userScoreData = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.userScoreData.push(x);
            });
            console.log(_this.userScoreData);
            _this.param = _this.route.snapshot.paramMap.get("name");
            _this.filterdData = [];
            _this.videoList.forEach(function (v) {
                if (v.name === _this.param) {
                    _this.filterdData.push(v);
                    console.log(_this.filterdData);
                    console.log(_this.filterdData[0].answer1);
                }
                var filterList = _this.userScoreData.filter(function (a) {
                    return a.Id === v.$key && a.username === localStorage.getItem("username");
                });
                if (filterList.length > 0) {
                    v.score = filterList[0].score;
                }
            });
        });
    };
    QuizzesComponent.prototype.SubmitClick = function ($key) {
        if (this.q1 !== undefined) {
            console.log(this.q1);
            if (this.filterdData[0].answer1 === this.q1) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer1);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
        }
        if (this.q2 !== undefined) {
            console.log(this.q2);
            if (this.filterdData[0].answer2 === this.q2) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer2);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q3 !== undefined) {
            console.log(this.q3);
            if (this.filterdData[0].answer3 === this.q3) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer3);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q4 !== undefined) {
            console.log(this.q4);
            if (this.filterdData[0].answer4 === this.q4) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer4);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q5 !== undefined) {
            console.log(this.q5);
            if (this.filterdData[0].answer5 === this.q5) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer5);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q6 !== undefined) {
            console.log(this.q6);
            if (this.filterdData[0].answer6 === this.q6) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer6);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q7 !== undefined) {
            console.log(this.q7);
            if (this.filterdData[0].answer7 === this.q7) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer7);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q8 !== undefined) {
            console.log(this.q8);
            if (this.filterdData[0].answer8 === this.q8) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer8);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q9 !== undefined) {
            console.log(this.q9);
            if (this.filterdData[0].answer9 === this.q9) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer9);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        if (this.q10 !== undefined) {
            console.log(this.q10);
            if (this.filterdData[0].answer10 === this.q10) {
                this.filterData.update($key, { isQCompleted: true });
                this.score += 1;
                console.log(this.filterdData[0].answer10);
                //console.log(Object.values(this.filterdData[0]));
                //this.router.navigate(['/training']);
            }
            //alert('correct');
        }
        //if ((this.filterdData[0].answer1 === this.q1) && (this.filterdData[0].answer2 === this.q2) && (this.filterdData[0].answer3 === this.q3) && (this.filterdData[0].answer4 === this.q4)) {
        //this.filterData.update($key, { isQCompleted: true });
        //localStorage.setItem("Score",this.filterData[0].Score.toString());
        alert("Congrats for Completing the quiz .Your Score is : " + this.score);
        this.filterData.update($key, { isQCompleted: true });
        this.filterdData[0].Score = this.score;
        this.key = this.route.snapshot.paramMap.get("key");
        console.log(this.key);
        var existData = this.userScoreData.filter(function (a) { return a.username === localStorage.getItem("username") && a.Id === $key; });
        this.filterData.update($key, { isQCompleted: true });
        if (existData.length > 0) {
            this.dataService.updateScoreDetails(existData[0].$key, this.score);
        }
        else {
            this.db.list("/userScoreData/").push({
                username: localStorage.getItem("username"),
                score: this.score,
                Id: $key
            });
        }
    };
    QuizzesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-quizzes",
            template: __webpack_require__("../../../../../src/app/quizzes/quizzes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/quizzes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__Services_videoData_service__["a" /* VideoDataService */]])
    ], QuizzesComponent);
    return QuizzesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map