﻿$(function () { $('.responsiveGallery-wrapper').responsiveGallery({ animatDuration: 400, Fullscreen: true, $btn_prev: $('.responsiveGallery-btn_prev'), $btn_next: $('.responsiveGallery-btn_next') }); }); $(document).ready(function () { ChangeAuthersLocation(); }); $(window).resize(function () { ChangeAuthersLocation(); }); function ChangeAuthersLocation() { $(".comments .comment-elem").each(function () { var Width_auther = $(this).find(".autherName").width(); var width_cmt_time = $(this).find(".cmt-time").width(); var width_parent = $(this).width(); if ((typeof Width_auther !== 'undefined') && (typeof width_cmt_time !== 'undefined') && (typeof width_parent !== 'undefined')) { if (parseInt(width_parent) - 70 - parseInt(width_cmt_time) < parseInt(Width_auther)) { $(this).find(".cmt-time").addClass("cmt-time_fixed"); $(this).find(".autherName").addClass("autherName-change"); } } }); $(".recentArticle .comment-elem").each(function () { var Width_auther = $(this).find(".autherName").width(); var width_cmt_time = $(this).find(".cmt-time").width(); var width_parent = $(this).width(); if ((typeof Width_auther !== 'undefined') && (typeof width_cmt_time !== 'undefined') && (typeof width_parent !== 'undefined')) { if (parseInt(width_parent) - 70 - parseInt(width_cmt_time) < parseInt(Width_auther)) { $(this).find(".cmt-time").addClass("cmt-time_fixed"); $(this).find(".autherName").addClass("autherName-change"); } } }); }