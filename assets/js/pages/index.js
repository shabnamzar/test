﻿function SliderOuterLoad() { var e = $(".slider_OuterBody ul "); $(e).delay(501).queue(function (e) { e() }); var r = parseInt($(".container").width()), i = parseInt($(window).width()), a = "", n = ""; void 0 !== r && void 0 !== i && 50 < r ? (n = (-1 * ((i - r) / 2 + .03 * i)).toString() + "px", a = ((i - r) / 2 + .025 * i).toString() + "px", $(e).find(".slick-list.draggable").delay(700).queue(function (e) { $(this).css("margin-left", n).css("width", $(window).width() + 20 + "px"), $(this).css("padding-left", a), e() })) : $(e).find(".slick-list.draggable").delay(700).queue(function (e) { $(this).css("padding-left", "0").css("margin-left", "0").css("width", "unset"), e() }) } function SliderOuterLoad_revese() { $(".slider_OuterBody ul .slick-list.draggable").css("padding-left", "0").css("width", $(".container").width() - 40 + "px") } $(document).ready(function () { $(".progress-bar").loading(), $("input").on("click", function () { $(".progress-bar").loading() }), $("#form1").validate({ rules: { inpTellphone: { tell: !0 } }, highlight: function (e) { $(e).addClass("has-error has-danger") }, unhighlight: function (e) { $(e).removeClass("has-error has-danger") }, errorPlacement: function (e, r) { $(r).addClass("has-error has-danger"), $(r).parents(".form-group").append(e) } }), $("#form2").validate({ rules: {}, highlight: function (e) { $(e).addClass("has-error has-danger") }, unhighlight: function (e) { $(e).removeClass("has-error has-danger") }, errorPlacement: function (e, r) { $(r).addClass("has-error has-danger"), $(r).parents(".form-group").append(e), $(r).parents(".form-group").find(".error").addClass("rightSide") } }), SliderOuterLoad() }), $("#btnServices").on("click", function () { $("#form1").valid() && alert("لطفا کدهای بکند خود را ثبت بفرمایید") }), $("#btnsend").on("click", function () { $("#form2").valid() && alert("لطفا کدهای بکند خود را ثبت بفرمایید") }), $(".customerBox ul").mouseleave(function () { $("#slider_OuterBody_slid").val(!1) }), $(".customerBox ul").mouseover(function () { $("#slider_OuterBody_slid").val(!0) }); var time = ""; $(window).resize(function () { "" == time ? (time = Date.now(), SliderOuterLoad()) : 2e3 < parseFloat(Date.now() - parseFloat(time)) && (SliderOuterLoad(), time = "") });