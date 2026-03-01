import { useRef, useEffect, useState, useMemo } from "react";
import PageBackground from "../layouts/PageBackground";
import FrameLayout from "../components/FrameLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function VideosPage() {
  const { t } = useLanguage();

  // ===== ДАННЫЕ (мемоизированные) =====
  const categories = useMemo(() => [
    {
    id: "consoles_era",
    title: t("text_videos_consoles_title"),
    videos: [
      {
        id: 1,
        youtubeId: "8UQDqY4QjEI",
        title: t("text_videos_consoles_name_1"),
        description: t("text_videos_consoles_desc_1"),
		commentary: t("text_videos_consoles_comment_1"),
      },
      {
        id: 2,
        youtubeId: "sRgWYeJ1Crw",
        title: t("text_videos_consoles_name_2"),
        description: t("text_videos_consoles_desc_2"),
		commentary: "",
      },
      {
        id: 3,
        youtubeId: "1we8PRBIOpw",
        title: t("text_videos_consoles_name_3"),
        description: t("text_videos_consoles_desc_3"),
		commentary: "",
      },
      {
        id: 4,
        youtubeId: "cUQdYWBp4so",
        title: t("text_videos_consoles_name_4"),
        description: t("text_videos_consoles_desc_4"),
		commentary: "",
      },
      {
        id: 5, 
        youtubeId: "v8_w1qC1u1s",
        title: t("text_videos_consoles_name_5"),
        description: t("text_videos_consoles_desc_5"),
		commentary: "",
      },
      {
        id: 6, 
        youtubeId: "pGeM8eDsB_U",
        title: t("text_videos_consoles_name_6"),
        description: t("text_videos_consoles_desc_6"),
		commentary: "",
      },
      {
        id: 7, 
        youtubeId: "Kr1tQIjxKsE",
        title: t("text_videos_consoles_name_7"),
        description: t("text_videos_consoles_desc_7"),
		commentary: "",
      },
	  {
        id: 8, 
        youtubeId: "Su0CzFPob6w",
        title: t("text_videos_consoles_name_8"),
        description: t("text_videos_consoles_desc_8"),
		commentary: "",
      },
	  {
        id: 9, 
        youtubeId: "rkbCJGMnJ5g",
        title: t("text_videos_consoles_name_9"),
        description: t("text_videos_consoles_desc_9"),
		commentary: t("text_videos_consoles_comment_9"),
      },
	  {
        id: 10, 
        youtubeId: "CotCmdt9H9g",
        title: t("text_videos_consoles_name_10"),
        description: t("text_videos_consoles_desc_10"),
		commentary: "",
      },
	  {
        id: 11, 
        youtubeId: "SBqPLlV7mHs",
        title: t("text_videos_consoles_name_11"),
        description: t("text_videos_consoles_desc_11"),
		commentary: "",
      },
	  {
        id: 12, 
        youtubeId: "vNRBuVfrXuA",
        title: t("text_videos_consoles_name_12"),
        description: t("text_videos_consoles_desc_12"),
		commentary: "",
      },
	  {
        id: 13, 
        youtubeId: "gdrmMMUla_A",
        title: t("text_videos_consoles_name_13"),
        description: t("text_videos_consoles_desc_13"),
		commentary: "",
      },
	  {
        id: 14, 
        youtubeId: "qUTVbO5kGfs",
        title: t("text_videos_consoles_name_14"),
        description: t("text_videos_consoles_desc_14"),
		commentary: "",
      },
	  {
        id: 15, 
        youtubeId: "cSlDTO1TgpU ",
        title: t("text_videos_consoles_name_15"),
        description: t("text_videos_consoles_desc_15"),
		commentary: "",
      },
	  {
        id: 16, 
        youtubeId: "eRNEgDHfujw",
        title: t("text_videos_consoles_name_16"),
        description: t("text_videos_consoles_desc_16"),
		commentary: "",
      },
	  {
        id: 17, 
        youtubeId: "5hDEnyRixt8",
        title: t("text_videos_consoles_name_17"),
        description: t("text_videos_consoles_desc_17"),
		commentary: "",
      },
	  {
        id: 18, 
        youtubeId: "eyvUId9r9TE",
        title: t("text_videos_consoles_name_18"),
        description: t("text_videos_consoles_desc_18"),
		commentary: "",
      },
	  {
        id: 19, 
        youtubeId: "DpxiLcwkHtM",
        title: t("text_videos_consoles_name_19"),
        description: t("text_videos_consoles_desc_19"),
		commentary: t("text_videos_consoles_comment_19"),
      },
    ],
  },

  {
    id: "consoles_era_eng",
    title: t("text_videos_engconsoles_title"),
    videos: [
	  {
        id: 1, 
        youtubeId: "dSVbYRJ1Qj8",
        title: t("text_videos_engconsoles_name_1"),
        description: t("text_videos_engconsoles_desc_1"),
		commentary: t("text_videos_engconsoles_comment_1"),
      },
	  {
        id: 2, 
        youtubeId: "szvbZA6wixE",
        title: t("text_videos_engconsoles_name_2"),
        description: t("text_videos_engconsoles_desc_2"),
		commentary: "",
      },
	  {
        id: 3, 
        youtubeId: "G9fvw9JhWug",
        title: t("text_videos_engconsoles_name_3"),
        description: t("text_videos_engconsoles_desc_3"),
		commentary: "",
      },
	  {
        id: 4, 
        youtubeId: "ew8jRsnmqhw",
        title: t("text_videos_engconsoles_name_4"),
        description: t("text_videos_engconsoles_desc_4"),
		commentary: "",
      },
	  {
        id: 5, 
        youtubeId: "zb9zrxZfYDU",
        title: t("text_videos_engconsoles_name_5"),
        description: t("text_videos_engconsoles_desc_5"),
		commentary: "",
      },
	  {
        id: 6, 
        youtubeId: "XtM6LmH1Ksc",
        title: t("text_videos_engconsoles_name_6"),
        description: t("text_videos_engconsoles_desc_6"),
		commentary: "",
      },
	  {
        id: 7, 
        youtubeId: "Bv8uUVvTncE",
        title: t("text_videos_engconsoles_name_7"),
        description: t("text_videos_engconsoles_desc_7"),
		commentary: "",
      },
	  {
        id: 8, 
        youtubeId: "J-7ni7uQF0c",
        title: t("text_videos_engconsoles_name_8"),
        description: t("text_videos_engconsoles_desc_8"),
		commentary: "",
      },
	  {
        id: 9, 
        youtubeId: "VDvJPxQA0CY",
        title: t("text_videos_engconsoles_name_9"),
        description: t("text_videos_engconsoles_desc_9"),
		commentary: "",
      },
	  {
        id: 10, 
        youtubeId: "Ib8IeFEAqxM",
        title: t("text_videos_engconsoles_name_10"),
        description: t("text_videos_engconsoles_desc_10"),
		commentary: "",
      },
	  {
        id: 11, 
        youtubeId: "boGy0mq4xfU",
        title: t("text_videos_engconsoles_name_11"),
        description: t("text_videos_engconsoles_desc_11"),
		commentary: "",
      },
	  {
        id: 12, 
        youtubeId: "TobKs9ERowI",
        title: t("text_videos_engconsoles_name_12"),
        description: t("text_videos_engconsoles_desc_12"),
		commentary: "",
      },
	  {
        id: 13, 
        youtubeId: "oSkMYzS6Okw",
        title: t("text_videos_engconsoles_name_13"),
        description: t("text_videos_engconsoles_desc_13"),
		commentary: "",
      },
	  {
        id: 14, 
        youtubeId: "2j8KlUfMTrY",
        title: t("text_videos_engconsoles_name_14"),
        description: t("text_videos_engconsoles_desc_14"),
		commentary: "",
      },
    ],
  },

  {
    id: "steam_bottom",
    title: t("text_videos_steambottom_title"),
    videos: [
	  {
        id: 1, 
        youtubeId: "m932BzMe8Gg",
        title: t("text_videos_steambottom_name_1"),
        description: t("text_videos_steambottom_desc_1"),
		commentary: t("text_videos_steambottom_comment_1"),
      },
	  {
        id: 2, 
        youtubeId: "hEG_KNWs4IM",
        title: t("text_videos_steambottom_name_2"),
        description: t("text_videos_steambottom_desc_2"),
		commentary: "",
      },
	  {
        id: 3, 
        youtubeId: "nxw1S4ibUw0",
        title: t("text_videos_steambottom_name_3"),
        description: t("text_videos_steambottom_desc_3"),
		commentary: "",
      },
	  {
        id: 4, 
        youtubeId: "ywxM-B8Ffu8",
        title: t("text_videos_steambottom_name_4"),
        description: t("text_videos_steambottom_desc_4"),
		commentary: "",
      },
	  {
        id: 5, 
        youtubeId: "8R-z9NhdqhY",
        title: t("text_videos_steambottom_name_5"),
        description: t("text_videos_steambottom_desc_5"),
		commentary: "",
      },
	  {
        id: 6, 
        youtubeId: "N5En4IgzhZY",
        title: t("text_videos_steambottom_name_6"),
        description: t("text_videos_steambottom_desc_6"),
		commentary: "",
      },
	  {
        id: 7, 
        youtubeId: "MnGptLa-O4k",
        title: t("text_videos_steambottom_name_7"),
        description: t("text_videos_steambottom_desc_7"),
		commentary: "",
      },
	  {
        id: 8, 
        youtubeId: "M10PFtzJuyA",
        title: t("text_videos_steambottom_name_8"),
        description: t("text_videos_steambottom_desc_8"),
		commentary: "",
      },
	  {
        id: 9, 
        youtubeId: "KZTU42jFDnU",
        title: t("text_videos_steambottom_name_9"),
        description: t("text_videos_steambottom_desc_9"),
		commentary: "",
      },
	  {
        id: 10, 
        youtubeId: "fbGg1NkQz3M",
        title: t("text_videos_steambottom_name_10"),
        description: t("text_videos_steambottom_desc_10"),
		commentary: "",
      },
	  {
        id: 11, 
        youtubeId: "OYZ0-KR5XmA",
        title: t("text_videos_steambottom_name_11"),
        description: t("text_videos_steambottom_desc_11"),
		commentary: "",
      },
	  {
        id: 12, 
        youtubeId: "cqihT4bBuBs",
        title: t("text_videos_steambottom_name_12"),
        description: t("text_videos_steambottom_desc_12"),
		commentary: "",
      },
	  {
        id: 13, 
        youtubeId: "Pv2gXLKEBUA",
        title: t("text_videos_steambottom_name_13"),
        description: t("text_videos_steambottom_desc_13"),
		commentary: "",
      },
    ],
  },
 
  {
    id: "vr_era",
    title: t("text_videos_vr_title"),
    videos: [
      {
        id: 1,
        youtubeId: "-0t85fP5WIE",
        title: t("text_videos_vr_name_1"),
        description: t("text_videos_vr_desc_1"),
		commentary: t("text_videos_vr_comment_1"),
      },
      {
        id: 2,
        youtubeId: "HgV5BWSAbek",
        title: t("text_videos_vr_name_2"),
        description: t("text_videos_vr_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "2ZQbs8cCNm4",
        title: t("text_videos_vr_name_3"),
        description: t("text_videos_vr_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "LxEi4QA_dNI",
        title: t("text_videos_vr_name_4"),
        description: t("text_videos_vr_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "BYcI60MS9Qo",
        title: t("text_videos_vr_name_5"),
        description: t("text_videos_vr_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "C7lWUC0aKzk",
        title: t("text_videos_vr_name_6"),
        description: t("text_videos_vr_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "TwLQTXpYWrI",
        title: t("text_videos_vr_name_7"),
        description: t("text_videos_vr_desc_7"),
		commentary: "",
      },
	  {
        id: 8,
        youtubeId: "A0qKgdTJQGg",
        title: t("text_videos_vr_name_8"),
        description: t("text_videos_vr_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "gp6V8TKS9Vs",
        title: t("text_videos_vr_name_9"),
        description: t("text_videos_vr_desc_9"),
		commentary: "",
      },
	  {
        id: 10,
        youtubeId: "oW75ggltAc4",
        title: t("text_videos_vr_name_10"),
        description: t("text_videos_vr_desc_10"),
		commentary: "",
      },
	  {
        id: 11,
        youtubeId: "0EFY8mtp8F4",
        title: t("text_videos_vr_name_11"),
        description: t("text_videos_vr_desc_11"),
		commentary: "",
      },
	  {
        id: 12,
        youtubeId: "8RbG8VOB288",
        title: t("text_videos_vr_name_12"),
        description: t("text_videos_vr_desc_12"),
		commentary: "",
      },
    ],
  },
 
  {
    id: "vr_era_eng",
    title: t("text_videos_engvr_title"),
    videos: [
      {
        id: 1,
        youtubeId: "7pha854C45Y",
        title: t("text_videos_engvr_name_1"),
        description: t("text_videos_engvr_desc_1"),
		commentary: t("text_videos_engvr_comment_1"),
      },
      {
        id: 2,
        youtubeId: "rnjjE6BqBBo",
        title: t("text_videos_engvr_name_2"),
        description: t("text_videos_engvr_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "q2ugOVFL2po",
        title: t("text_videos_engvr_name_3"),
        description: t("text_videos_engvr_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "w25wmWl5Ci8",
        title: t("text_videos_engvr_name_4"),
        description: t("text_videos_engvr_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "KwJNVZRo53Q",
        title: t("text_videos_engvr_name_5"),
        description: t("text_videos_engvr_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "5Ge5AFmplrs",
        title: t("text_videos_engvr_name_6"),
        description: t("text_videos_engvr_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "XMapwz1W6cg",
        title: t("text_videos_engvr_name_7"),
        description: t("text_videos_engvr_desc_7"),
		commentary: t("text_videos_engvr_comment_7"),
      },
    ],
  },
 
  {
    id: "piracy_era",
    title: t("text_videos_piracy_title"),
    videos: [
      {
        id: 1,
        youtubeId: "u6p1EifS3Eo",
        title: t("text_videos_piracy_name_1"),
        description: t("text_videos_piracy_desc_1"),
		commentary: "",
      },
      {
        id: 2,
        youtubeId: "AKh5RV4XTTM",
        title: t("text_videos_piracy_name_2"),
        description: t("text_videos_piracy_desc_2"),
		commentary: "",
      },
      {
        id: 3,
        youtubeId: "auUMTLZ1Syc",
        title: t("text_videos_piracy_name_3"),
        description: t("text_videos_piracy_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "qYlYeHOdidU",
        title: t("text_videos_piracy_name_4"),
        description: t("text_videos_piracy_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "vhGPC67RsGA",
        title: t("text_videos_piracy_name_5"),
        description: t("text_videos_piracy_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "W6RQOtiV3AM",
        title: t("text_videos_piracy_name_6"),
        description: t("text_videos_piracy_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "6HCEPDbdwok",
        title: t("text_videos_piracy_name_7"),
        description: t("text_videos_piracy_desc_7"),
		commentary: t("text_videos_piracy_comment_7"),
      },
	  {
        id: 8,
        youtubeId: "-QiNhP-bw9I",
        title: t("text_videos_piracy_name_8"),
        description: t("text_videos_piracy_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "ahxOgNOH8Es",
        title: t("text_videos_piracy_name_9"),
        description: t("text_videos_piracy_desc_9"),
		commentary: "",
      },
	  {
        id: 10,
        youtubeId: "iATn1-0WDTE",
        title: t("text_videos_piracy_name_10"),
        description: t("text_videos_piracy_desc_10"),
		commentary: "",
      },
	  {
        id: 11,
        youtubeId: "S6AGZFw0S-w",
        title: t("text_videos_piracy_name_11"),
        description: t("text_videos_piracy_desc_11"),
		commentary: "",
      },
    ],
  },
 
  {
    id: "portable_era",
    title: t("text_videos_portable_title"),
    videos: [
      {
        id: 1,
        youtubeId: "FmzAXDVGJKk",
        title: t("text_videos_portable_name_1"),
        description: t("text_videos_portable_desc_1"),
		commentary: "",
      },
      {
        id: 2,
        youtubeId: "0mo9iiBojCQ",
        title: t("text_videos_portable_name_2"),
        description: t("text_videos_portable_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "2szognYhz1s",
        title: t("text_videos_portable_name_3"),
        description: t("text_videos_portable_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "2XTT15PSapA",
        title: t("text_videos_portable_name_4"),
        description: t("text_videos_portable_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "43IND1c9Ols",
        title: t("text_videos_portable_name_5"),
        description: t("text_videos_portable_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "6IgqkCSTnXM",
        title: t("text_videos_portable_name_6"),
        description: t("text_videos_portable_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "R6MOQGvAUqY",
        title: t("text_videos_portable_name_7"),
        description: t("text_videos_portable_desc_7"),
		commentary: t("text_videos_portable_comment_7"),
      },
	  {
        id: 8,
        youtubeId: "NUvRFHtmrwY",
        title: t("text_videos_portable_name_8"),
        description: t("text_videos_portable_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "A4LgGbeDvpY",
        title: t("text_videos_portable_name_9"),
        description: t("text_videos_portable_desc_9"),
		commentary: "",
      },
	  {
        id: 10,
        youtubeId: "ReBsHN2iaAw",
        title: t("text_videos_portable_name_10"),
        description: t("text_videos_portable_desc_10"),
		commentary: "",
      },
	  {
        id: 11,
        youtubeId: "wIRMP_nGfbM",
        title: t("text_videos_portable_name_11"),
        description: t("text_videos_portable_desc_11"),
		commentary: "",
      },
	  {
        id: 12,
        youtubeId: "z3LbMnfb5kw",
        title: t("text_videos_portable_name_12"),
        description: t("text_videos_portable_desc_12"),
		commentary: "",
      },
	  {
        id: 13,
        youtubeId: "bApmW1hnAB4",
        title: t("text_videos_portable_name_13"),
        description: t("text_videos_portable_desc_13"),
		commentary: "",
      },
    ],
  },
 
  {
    id: "mobile_era",
    title: t("text_videos_mobile_title"),
    videos: [
      {
        id: 1,
        youtubeId: "IgIQwHtdKdY",
        title: t("text_videos_mobile_name_1"),
        description: t("text_videos_mobile_desc_1"),
		commentary: t("text_videos_mobile_comment_1"),
      },
      {
        id: 2,
        youtubeId: "zKE25Gh41oI",
        title: t("text_videos_mobile_name_2"),
        description: t("text_videos_mobile_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "qbTICT3ZNL0",
        title: t("text_videos_mobile_name_3"),
        description: t("text_videos_mobile_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "UkqklI1-pwU",
        title: t("text_videos_mobile_name_4"),
        description: t("text_videos_mobile_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "LJ5OZqic1-E",
        title: t("text_videos_mobile_name_5"),
        description: t("text_videos_mobile_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "WdfaC8YMunU",
        title: t("text_videos_mobile_name_6"),
        description: t("text_videos_mobile_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "TaK-8BBM43E",
        title: t("text_videos_mobile_name_7"),
        description: t("text_videos_mobile_desc_7"),
		commentary: "",
      },
	  {
        id: 8,
        youtubeId: "8Y0vpV5U2aE",
        title: t("text_videos_mobile_name_8"),
        description: t("text_videos_mobile_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "qvr8hGqO83E",
        title: t("text_videos_mobile_name_9"),
        description: t("text_videos_mobile_desc_9"),
		commentary: "",
      },
	  {
        id: 10,
        youtubeId: "YC1sGxLE0M4",
        title: t("text_videos_mobile_name_10"),
        description: t("text_videos_mobile_desc_10"),
		commentary: "",
      },
	  {
        id: 11,
        youtubeId: "f6NYr2ZiwMo",
        title: t("text_videos_mobile_name_11"),
        description: t("text_videos_mobile_desc_11"),
		commentary: "",
      },
    ],
  },
 
   {
    id: "game_journalists_era",
    title: t("text_videos_journalists_title"),
    videos: [
      {
        id: 1,
        youtubeId: "MnmVfkrHqwA",
        title: t("text_videos_journalists_name_1"),
        description: t("text_videos_journalists_desc_1"),
		commentary: t("text_videos_journalists_comment_1"),
      },
      {
        id: 2,
        youtubeId: "kCncWs1FAFE",
        title: t("text_videos_journalists_name_2"),
        description: t("text_videos_journalists_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "6mV6AflkScY",
        title: t("text_videos_journalists_name_3"),
        description: t("text_videos_journalists_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "kgIj7BM5mhM",
        title: t("text_videos_journalists_name_4"),
        description: t("text_videos_journalists_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "pP-8Q4zhFbc",
        title: t("text_videos_journalists_name_5"),
        description: t("text_videos_journalists_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "jb_Qj1PWtkg",
        title: t("text_videos_journalists_name_6"),
        description: t("text_videos_journalists_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "LdBB4qPTWSw",
        title: t("text_videos_journalists_name_7"),
        description: t("text_videos_journalists_desc_7"),
		commentary: "",
      },
	  {
        id: 8,
        youtubeId: "cm7DKrqp0c8",
        title: t("text_videos_journalists_name_8"),
        description: t("text_videos_journalists_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "DJfJ00FucLg",
        title: t("text_videos_journalists_name_9"),
        description: t("text_videos_journalists_desc_9"),
		commentary: t("text_videos_journalists_comment_9"),
      },
    ],
  },
 
   {
    id: "cheating_era",
    title: t("text_videos_cheating_title"),
    videos: [
      {
        id: 1,
        youtubeId: "86zVYXesAEU",
        title: t("text_videos_cheating_name_1"),
        description: t("text_videos_cheating_desc_1"),
		commentary: "",
      },
      {
        id: 2,
        youtubeId: "fi7zH6ZvjYM",
        title: t("text_videos_cheating_name_2"),
        description: t("text_videos_cheating_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "QK8W9boFN48",
        title: t("text_videos_cheating_name_3"),
        description: t("text_videos_cheating_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "pAPYJABWaTA",
        title: t("text_videos_cheating_name_4"),
        description: t("text_videos_cheating_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "NZFfLAqV03w",
        title: t("text_videos_cheating_name_5"),
        description: t("text_videos_cheating_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "eXOTwcuER0A",
        title: t("text_videos_cheating_name_6"),
        description: t("text_videos_cheating_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "CCTk4dKZ5Do",
        title: t("text_videos_cheating_name_7"),
        description: t("text_videos_cheating_desc_7"),
		commentary: "",
      },
	  {
        id: 8,
        youtubeId: "HDi0ZHQgHTM",
        title: t("text_videos_cheating_name_8"),
        description: t("text_videos_cheating_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "XTybjmuzIgg",
        title: t("text_videos_cheating_name_9"),
        description: t("text_videos_cheating_desc_9"),
		commentary: "",
      },
	  {
        id: 10,
        youtubeId: "T4ZcYTXN8SM",
        title: t("text_videos_cheating_name_10"),
        description: t("text_videos_cheating_desc_10"),
		commentary: "",
      },
    ],
  },
 
   {
    id: "igm_videos",
    title: t("text_videos_igmrandom_title"),
    videos: [
      {
        id: 1,
        youtubeId: "NyHHD3KIUsY",
        title: t("text_videos_igmrandom_name_1"),
        description: t("text_videos_igmrandom_desc_1"),
		commentary: "",
      },
      {
        id: 2,
        youtubeId: "3_fWjXNghu0",
        title: t("text_videos_igmrandom_name_2"),
        description: t("text_videos_igmrandom_desc_2"),
		commentary: "",
      },
	  {
        id: 3,
        youtubeId: "p3V3HNh8AcA",
        title: t("text_videos_igmrandom_name_3"),
        description: t("text_videos_igmrandom_desc_3"),
		commentary: "",
      },
	  {
        id: 4,
        youtubeId: "fLzBLexhgRo",
        title: t("text_videos_igmrandom_name_4"),
        description: t("text_videos_igmrandom_desc_4"),
		commentary: "",
      },
	  {
        id: 5,
        youtubeId: "4bw-neJ3FTE",
        title: t("text_videos_igmrandom_name_5"),
        description: t("text_videos_igmrandom_desc_5"),
		commentary: "",
      },
	  {
        id: 6,
        youtubeId: "QcdbeVXTPVk",
        title: t("text_videos_igmrandom_name_6"),
        description: t("text_videos_igmrandom_desc_6"),
		commentary: "",
      },
	  {
        id: 7,
        youtubeId: "xZWBIRcg8Rs",
        title: t("text_videos_igmrandom_name_7"),
        description: t("text_videos_igmrandom_desc_7"),
		commentary: "",
      },
	  {
        id: 8,
        youtubeId: "8NtXG1DfgLw",
        title: t("text_videos_igmrandom_name_8"),
        description: t("text_videos_igmrandom_desc_8"),
		commentary: "",
      },
	  {
        id: 9,
        youtubeId: "0nReiCCcM8M",
        title: t("text_videos_igmrandom_name_9"),
        description: t("text_videos_igmrandom_desc_9"),
		commentary: t("text_videos_igmrandom_comment_9"),
      },
	  {
        id: 10,
        youtubeId: "oFjS941eI2M",
        title: t("text_videos_igmrandom_name_10"),
        description: t("text_videos_igmrandom_desc_10"),
		commentary: "",
      },
	  {
        id: 11,
        youtubeId: "FWxswC2-d9Q",
        title: t("text_videos_igmrandom_name_11"),
        description: t("text_videos_igmrandom_desc_11"),
		commentary: "",
      },
	  {
        id: 12,
        youtubeId: "H3-dk-a1cT0",
        title: t("text_videos_igmrandom_name_12"),
        description: t("text_videos_igmrandom_desc_12"),
		commentary: "",
      },
	  {
        id: 13,
        youtubeId: "yVEsSlntucQ",
        title: t("text_videos_igmrandom_name_13"),
        description: t("text_videos_igmrandom_desc_13"),
		commentary: "",
      },
	  {
        id: 14,
        youtubeId: "edYWYlXvKxw",
        title: t("text_videos_igmrandom_name_14"),
        description: t("text_videos_igmrandom_desc_14"),
		commentary: t("text_videos_igmrandom_comment_14"),
      },
	  {
        id: 15,
        youtubeId: "w3hS5Gg7G1s",
        title: t("text_videos_igmrandom_name_15"),
        description: t("text_videos_igmrandom_desc_15"),
		commentary: "",
      },
	  {
        id: 16,
        youtubeId: "cMys5G7na2c",
        title: t("text_videos_igmrandom_name_16"),
        description: t("text_videos_igmrandom_desc_16"),
		commentary: t("text_videos_igmrandom_comment_16"),
      },
	  {
        id: 17,
        youtubeId: "9pOCTOjibTU",
        title: t("text_videos_igmrandom_name_17"),
        description: t("text_videos_igmrandom_desc_17"),
		commentary: "",
      },
	  {
        id: 18,
        youtubeId: "NZDXHTq-OYI",
        title: t("text_videos_igmrandom_name_18"),
        description: t("text_videos_igmrandom_desc_18"),
		commentary: "",
      },
	  {
        id: 19,
        youtubeId: "rv7CgUiq_60",
        title: t("text_videos_igmrandom_name_19"),
        description: t("text_videos_igmrandom_desc_19"),
		commentary: "",
      },
	  {
        id: 20,
        youtubeId: "8k51Iu9n6kM",
        title: t("text_videos_igmrandom_name_20"),
        description: t("text_videos_igmrandom_desc_20"),
		commentary: "",
      },
	  {
        id: 21,
        youtubeId: "SuL3WICpCZM",
        title: t("text_videos_igmrandom_name_21"),
        description: t("text_videos_igmrandom_desc_21"),
		commentary: "",
      },
	  {
        id: 22,
        youtubeId: "uGMKn4dhh6E",
        title: t("text_videos_igmrandom_name_22"),
        description: t("text_videos_igmrandom_desc_22"),
		commentary: "",
      },
	  {
        id: 23,
        youtubeId: "0EiTIH-T_Fw",
        title: t("text_videos_igmrandom_name_23"),
        description: t("text_videos_igmrandom_desc_23"),
		commentary: t("text_videos_igmrandom_comment_23"),
      },
	  {
        id: 24,
        youtubeId: "E6ihgGH3URU",
        title: t("text_videos_igmrandom_name_24"),
        description: t("text_videos_igmrandom_desc_24"),
		commentary: "",
      },
	  {
        id: 25,
        youtubeId: "Lsx8TCgXcy0",
        title: t("text_videos_igmrandom_name_25"),
        description: t("text_videos_igmrandom_desc_25"),
		commentary: "",
      },
	  {
        id: 26,
        youtubeId: "yhApKMmbTxc",
        title: t("text_videos_igmrandom_name_26"),
        description: t("text_videos_igmrandom_desc_26"),
		commentary: "",
      },
	  {
        id: 27,
        youtubeId: "_Ypoz59m7VQ",
        title: t("text_videos_igmrandom_name_27"),
        description: t("text_videos_igmrandom_desc_27"),
		commentary: "",
      },
	  {
        id: 28,
        youtubeId: "8zgovP6k6ek",
        title: t("text_videos_igmrandom_name_28"),
        description: t("text_videos_igmrandom_desc_28"),
		commentary: "",
      },
	  {
        id: 29,
        youtubeId: "uwJewDO9lYY",
        title: t("text_videos_igmrandom_name_29"),
        description: t("text_videos_igmrandom_desc_29"),
		commentary: t("text_videos_igmrandom_comment_29"),
      },
	  {
        id: 30,
        youtubeId: "TwY5nHRZM7Y",
        title: t("text_videos_igmrandom_name_30"),
        description: t("text_videos_igmrandom_desc_30"),
		commentary: "",
      },
	  {
        id: 31,
        youtubeId: "L9w-sjNoZ3M",
        title: t("text_videos_igmrandom_name_31"),
        description: t("text_videos_igmrandom_desc_31"),
		commentary: "",
      },
	  {
        id: 32,
        youtubeId: "_h74mEouHt8",
        title: t("text_videos_igmrandom_name_32"),
        description: t("text_videos_igmrandom_desc_32"),
		commentary: "",
      },
	  {
        id: 33,
        youtubeId: "jFRcr8yDcNc",
        title: t("text_videos_igmrandom_name_33"),
        description: t("text_videos_igmrandom_desc_33"),
		commentary: "",
      },
	  {
        id: 34,
        youtubeId: "_8jk7fzAQc4",
        title: t("text_videos_igmrandom_name_34"),
        description: t("text_videos_igmrandom_desc_34"),
		commentary: "",
      },
	  {
        id: 35,
        youtubeId: "YWEMNKuv5Aw",
        title: t("text_videos_igmrandom_name_35"),
        description: t("text_videos_igmrandom_desc_35"),
		commentary: t("text_videos_igmrandom_comment_35"),
      },
	  {
        id: 36,
        youtubeId: "kFLOPHAbSyc",
        title: t("text_videos_igmrandom_name_36"),
        description: t("text_videos_igmrandom_desc_36"),
		commentary: t("text_videos_igmrandom_comment_36"),
      },
	  {
        id: 37,
        youtubeId: "l1N3F7LVUnY",
        title: t("text_videos_igmrandom_name_37"),
        description: t("text_videos_igmrandom_desc_37"),
		commentary: "",
      },
	  {
        id: 38,
        youtubeId: "lKjJhQZJoPo",
        title: t("text_videos_igmrandom_name_38"),
        description: t("text_videos_igmrandom_desc_38"),
		commentary: "",
      },
	  {
        id: 39,
        youtubeId: "5e7Y3X-LVJE",
        title: t("text_videos_igmrandom_name_39"),
        description: t("text_videos_igmrandom_desc_39"),
		commentary: "",
      },
	  {
        id: 40,
        youtubeId: "6V9KXkERor0",
        title: t("text_videos_igmrandom_name_40"),
        description: t("text_videos_igmrandom_desc_40"),
		commentary: "",
      },
	  {
        id: 41,
        youtubeId: "wgD9UDZBGtI",
        title: t("text_videos_igmrandom_name_41"),
        description: t("text_videos_igmrandom_desc_41"),
		commentary: "",
      },
	  {
        id: 42,
        youtubeId: "7I59PrJW1hY",
        title: t("text_videos_igmrandom_name_42"),
        description: t("text_videos_igmrandom_desc_42"),
		commentary: "",
      },
	  {
        id: 43,
        youtubeId: "vxJEx7GAjwI",
        title: t("text_videos_igmrandom_name_43"),
        description: t("text_videos_igmrandom_desc_43"),
		commentary: "",
      },
	  {
        id: 44,
        youtubeId: "pScwx8g9ULM",
        title: t("text_videos_igmrandom_name_44"),
        description: t("text_videos_igmrandom_desc_44"),
		commentary: "",
      },
    ],
  },
  
  {
    id: "unsorted",
    title: t("text_videos_unsorted_title"),
    videos: [
      {
        id: 1,
        youtubeId: "j8S-EkrsxE0",
        title: t("text_videos_unsorted_name_1"),
        description: t("text_videos_unsorted_desc_1"),
		commentary: t("text_videos_cheating_comment_1"),
      },
      {
        id: 2,
        youtubeId: "n5ZtJM7qACw",
        title: t("text_videos_unsorted_name_2"),
        description: t("text_videos_unsorted_desc_2"),
		commentary: t("text_videos_cheating_comment_2"),
      },
	  {
        id: 3,
        youtubeId: "d8YRovCXc5c",
        title: t("text_videos_unsorted_name_3"),
        description: t("text_videos_unsorted_desc_3"),
		commentary: t("text_videos_cheating_comment_3"),
      },
	  {
        id: 4,
        youtubeId: "qQkSGJNtH38",
        title: t("text_videos_unsorted_name_4"),
        description: t("text_videos_unsorted_desc_4"),
		commentary: t("text_videos_cheating_comment_4"),
      },
	  {
        id: 5,
        youtubeId: "Ua2VtR3_I3o",
        title: t("text_videos_unsorted_name_5"),
        description: t("text_videos_unsorted_desc_5"),
		commentary: t("text_videos_cheating_comment_5"),
      },
    ],
  },
 ], [t]);

  // ===== STATE ХРАНИТ ТОЛЬКО ID =====
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories[0]?.id
  );

  const activeCategory = categories.find(
    (cat) => cat.id === activeCategoryId
  );

  const [activeVideoId, setActiveVideoId] = useState(
    activeCategory?.videos[0]?.id
  );

  const activeVideo = activeCategory?.videos.find(
    (video) => video.id === activeVideoId
  );

  // ===== КНОПКА НАВЕРХ =====
  const playerRef = useRef(null);
  const frameAnchorRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [anchorLeft, setAnchorLeft] = useState(0);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const update = () => {
      if (!frameAnchorRef.current) return;
      const rect = frameAnchorRef.current.getBoundingClientRect();
      setAnchorLeft(rect.left);
      setIsClamped(rect.left < 40);
    };

	const onScroll = () => {
    const shouldShow = window.scrollY > 300;
    setShowScrollUp(prev => prev !== shouldShow ? shouldShow : prev);
	};

    update();
    onScroll();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ===== ЗАЩИТА ОТ ПУСТЫХ ДАННЫХ =====
  if (!activeCategory || !activeVideo) return null;

  return (
    <PageBackground>
      <div ref={frameAnchorRef} className="relative flex w-full justify-center">

        {/* КНОПКА НАВЕРХ */}
<button
  onClick={() =>
    playerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className={`
    fixed top-6
    z-20
    bg-black/30 hover:bg-black/50
    text-white rounded-full w-10 h-16
    flex flex-col items-center justify-center
    transition-all duration-200
    ${showScrollUp
      ? "opacity-50 hover:opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"}
  `}
  style={{
    left: "clamp(20px, calc((100vw - 72rem)/2 - 52px), 100vw)",
  }}
>
  <span className="text-xl leading-none">▲</span>
  <span className="text-xl leading-none -mt-1">▲</span>
</button>

        <div className="w-full max-w-6xl mx-auto">
          <FrameLayout>
            <div className="px-6 sm:px-8 lg:px-10">
              <Header />

              {/* Заголовок */}
              <h1 className="text-4xl font-bold text-center mt-8">
                {t("text_title_videos")}
              </h1>

              {/* Видео */}
              <div
                ref={playerRef}
                className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black mt-6"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
				  key={activeVideo.youtubeId}
                  allowFullScreen
                />
              </div>

              {/* Название и описание */}
              <div className="space-y-2 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mt-5">
                  {activeVideo.title}
                </h2>
                <p className="text-gray-300">
                  {activeVideo.description}
                </p>
                <p className="italic text-gray-300">
                  {activeVideo.commentary}
                </p>
              </div>

              {/* Категории */}
              <div className="space-y-4 mt-10">
                <h3 className="text-2xl font-semibold">
                  {t("text_videos_playlist_categories")}
                </h3>

                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategoryId(cat.id);
                          setActiveVideoId(cat.videos[0].id);
                        }}
                        className={`px-4 py-2 rounded-lg transition font-medium ${
                          activeCategoryId === cat.id
                            ? "bg-yellow-400 text-black"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

{/* Старый вариант скроллящейся галереи, которая не жмется рамкой, и я не придумал, как это победить :(
			 <div className="gallery-scroll flex flex-row gap-4 overflow-x-auto min-w-0 w-full max-w-4xl mx-auto"> 
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveVideo(cat.videos[0]);
                    }}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap shrink-0 transition font-medium ${
                      activeCategory.id === cat.id
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
				*/}

              {/* Видео текущей категории */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mt-10">
                  {t("text_videos_playlist_list")}
                </h3>

                <div className="space-y-2 w-full mx-auto">
                  {activeCategory.videos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => setActiveVideoId(video.id)}
                      className={`flex gap-4 p-3 rounded-xl cursor-pointer transition
                        ${
                          activeVideoId === video.id
                            ? "bg-gray-700 ring-2 ring-yellow-400"
                            : "bg-gray-800 hover:bg-gray-700"
                        }`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-40 h-24 object-cover rounded-lg"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">
                          {video.title}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Footer />
            </div>
          </FrameLayout>
        </div>
      </div>
    </PageBackground>
  );
}