// Função para abrir menu retrátil
function abrirMenu(){
	document.getElementById('menu_retratil').style.display = 'block'
}

// Função para fechar menu retrátil
function fecharMenu(){
	document.getElementById('menu_retratil').style.display = 'none'
}

var popUp_prod = document.querySelector('.pop_up')
var img_popUp = document.querySelector('#pop_img')
var nome_popup = document.querySelector('.title_info')
var preco_prod = document.querySelector('.preco')

// Função para abrir pop up dos produtos
function abrirPopUp01(){
	var nome = document.querySelector('#nome_potion01').innerHTML
	var img = document.querySelector('#img_prod01').src
	var preco = document.querySelector('#preco01').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}

function abrirPopUp02(){
	var nome = document.querySelector('#nome_potion02').innerHTML
	var img = document.querySelector('#img_prod02').src
	var preco = document.querySelector('#preco02').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}

function abrirPopUp03(){
	var nome = document.querySelector('#nome_potion03').innerHTML
	var img = document.querySelector('#img_prod03').src
	var preco = document.querySelector('#preco03').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}

function abrirPopUp04(){
	var nome = document.querySelector('#nome_potion04').innerHTML
	var img = document.querySelector('#img_prod04').src
	var preco = document.querySelector('#preco04').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}

function abrirPopUp05(){
	var nome = document.querySelector('#nome_potion05').innerHTML
	var img = document.querySelector('#img_prod05').src
	var preco = document.querySelector('#preco05').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}

function abrirPopUp06(){
	var nome = document.querySelector('#nome_potion06').innerHTML
	var img = document.querySelector('#img_prod06').src
	var preco = document.querySelector('#preco06').innerHTML

	img_popUp.src = img
	nome_popup.innerHTML = nome
	preco_prod.innerHTML = preco

	popUp_prod.style.display = "block"
}


// Função para fechar pop up dos produtos
var popUp = document.querySelector('.pop_up')
function fechaPopUp(){
	popUp.style.display = 'none'
}

window.onclick = function(event){
	if (event.target == popUp){
		popUp.style.display = 'none'
	}
}


// Funcão para alterar numero da sacola
function numSacola(){
	var bag = document.querySelector('#num_bag').innerHTML
	var num_bag = parseInt(bag)
	num_bag += 1
	document.querySelector('#num_bag').innerHTML = num_bag
}
