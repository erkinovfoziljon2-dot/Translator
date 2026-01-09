'strict mode'
const kirish=document.querySelector('#kirish')
const chiqish=document.querySelector('#chiqish')
const btn=document.querySelector('#btn')
btn.addEventListener("click", async()=>{
const text=kirish.value.trim()
if(!text){
	alert("Avval tarjima qilmoqchi bo'lgan so'zingizni kiriting")
}
chiqish.value="Tarjima qilinmoqda..."
try{
	const response =await fetch(
	`https://api.mymemory.translated.net/get?q=${text}&langpair=en|uzb`
	)
	const data =await response.json()
	chiqish.value=data.responseData.translatedText
}catch(error){
	chiqish.value="Xatolik yuz berdi!"
}
})