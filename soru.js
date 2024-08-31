// oop: nesne tabanli programlama
// object 

function Soru(soruMetni,cevapSecenekleri,dogruCevap,cevabiKontrolEt) { // sınıf veya constructor
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
 };
 // her bir obje yapısına cevabı kontrol et fonskiyonu gönderilmez referans cagirip kullancaklar
 
 Soru.prototype.cevabiKontrolEt = function(cevap){
     return cevap === this.dogruCevap;   
 };

 let sorular = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi Front-End kapsamında değerlendirilmez?", { a: "CSS", b: "HTML",c: "JavaScript", d: "SQL"}, "d"),
    new Soru("3-Hangisi Back-End kapsamında uygulamasıdır?", { a: "Node.js", b: "Typescript",c: "Angular", d: "React"}, "a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz ?", { a: "Recat", b: "Angular",c: "Vue.js", d: "ASP.NET"} ,"d")
];