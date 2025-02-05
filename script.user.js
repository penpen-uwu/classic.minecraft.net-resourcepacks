// ==UserScript==
// @name         classic.minecraft.net Resource Packs
// @namespace    https://github.com/ewanhowell5195/classic.minecraft.net-resourcepacks
// @version      1.1.0
// @description  Resource Packs for classic.minecraft.net
// @author       Ewan Howell
// @match        https://classic.minecraft.net/*
// @icon         https://ewanhowell.com/assets/images/logo/logo.webp
// @updateURL    https://raw.githubusercontent.com/ewanhowell5195/classic.minecraft.net-resourcepacks/master/script.user.js
// @downloadURL  https://raw.githubusercontent.com/ewanhowell5195/classic.minecraft.net-resourcepacks/master/script.user.js
// @grant        none
// ==/UserScript==

const pack = new URL(location).searchParams.get("pack") ?? "dokucraft"
const source = "https://raw.githubusercontent.com/penpen-uwu/classic.minecraft.net-resourcepacks/"

class newImage extends Image {
  set src(value) {
    super.src = value
    const url = `${source}/master/${pack}/${value}`
    const xhr = new XMLHttpRequest()
    xhr.open("HEAD", url, false)
    xhr.send()
    if (xhr.status === 200) {
      super.src = url
    } else {
      console.error(`Missing custom texture: ${value}`)
    }
  }
}

window.Image = newImage
