import{j as e,r as l,d as t,b as n}from"./app-0531c79f.js";import{F as x}from"./style-2d64b168.js";import{N as d}from"./NavElse-45ec7ae1.js";import{L as c}from"./Layout-c504fa54.js";import"./index-a3656e52.js";const o=()=>e.jsx("div",{className:"bg-BlueTako text-white font-inter w-full py-16 md:py-8",children:e.jsx("div",{className:"container mx-auto px-4 md:px-8 pt-8 md:pt-16 lg:pt-[104px] py-8",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl lg:text-4xl font-bold text-YellowTako",children:["Profesional"," ",e.jsx("span",{className:"text-white",children:"Program"})]}),e.jsx("p",{className:"text-xs lg:text-base pt-2 lg:w-[80%]",children:"Kami menawarkan lingkungan kerja yang dinamis dan suportif bagi semua karyawan kami. Kami percaya bahwa setiap orang memiliki potensi untuk berkembang dan berkontribusi."}),e.jsx("img",{src:"/images/profesional.svg",alt:"",srcset:"",className:"scale-90 py-4 md:hidden"}),e.jsxs("div",{className:"flex gap-16 md:pt-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold lg:text-2xl",children:"Requirement"}),e.jsxs("ul",{className:"text-xs list-disc list-inside pt-2 lg:text-base",children:[e.jsx("li",{children:"Gpa 3.00"}),e.jsx("li",{className:"pt-1",children:"Bekerja di Surabaya"}),e.jsx("li",{className:"pt-1",children:"5 hari kerja (8 jam kerja)"})]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold lg:text-2xl",children:"Benefit"}),e.jsxs("ul",{className:"text-xs list-disc list-inside pt-2 lg:text-base",children:[e.jsx("li",{children:"Gaji Pokok"}),e.jsx("li",{className:"pt-1",children:"Real Project"}),e.jsx("li",{className:"pt-1",children:"Sertifikat"})]})]})]})]}),e.jsx("div",{className:"hidden md:block",children:e.jsx("img",{src:"/images/profesional.svg",alt:"",srcset:"",className:"py-4 lg:scale-125 lg:-translate-x-12"})})]})})}),m=()=>{const[i,r]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const a=await n.get("/form/view_pro");r(a.data)}catch(a){console.error("Error sending data:",a)}})()},[]),e.jsx(e.Fragment,{children:i.map(s=>e.jsxs("div",{className:"bg-white p-8 rounded-xl",children:[e.jsx("h1",{className:"font-bold",children:s.pekerjaan}),e.jsx("h2",{className:"text-BlueTako pt-2",children:s.perusahaan}),e.jsx("p",{className:"text-xs pt-4",children:s.deskripsi}),e.jsxs("div",{className:"flex gap-2 pt-4 flex-wrap",children:[e.jsx("div",{className:"px-4 py-2 bg-BlueTako rounded-full text-white text-xs",children:"Marketing strategy"}),e.jsx("div",{className:"px-4 py-2 bg-BlueTako rounded-full text-white text-xs",children:"Negotiation"}),e.jsx("div",{className:"px-4 py-2 bg-BlueTako rounded-full text-white text-xs",children:"Problem Solver"}),e.jsx("div",{className:"px-4 py-2 bg-BlueTako rounded-full text-white text-xs",children:"Time Management"})]}),e.jsxs("div",{className:"text-xs pt-4",children:["Batas Lamaran : ",s.batas_lamaran]}),e.jsxs("div",{className:"flex pt-4 gap-2",children:[e.jsx("div",{className:"w-full",children:e.jsx(t,{href:`/job/profesional/${s.id}`,children:e.jsx("button",{className:"bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full",children:"Lihat Detail"})})}),e.jsx("div",{className:"w-full",children:e.jsx(t,{href:`/job/formulir/${s.id}`,children:e.jsx("button",{className:"bg-BlueTako text-white py-2 rounded-lg w-full",children:"Lamar"})})})]})]},s.id))})},f=()=>e.jsx(c,{pageTitle:"Profesional | Tako Karir",children:e.jsxs("section",{children:[e.jsx(d,{}),e.jsx(o,{}),e.jsx("div",{className:"bg-BgTako text-DarkTako font-inter w-full py-16",children:e.jsxs("div",{className:" w-full py-16 px-4 md:px-8 lg:px-8 xl:px-24 2xl:px-16 container mx-auto",children:[e.jsxs("div",{className:"container mx-auto justify-center",children:[e.jsx("h1",{className:"text-center font-bold text-2xl",children:"Pekerjaan yang tersedia"}),e.jsx("p",{className:"text-center pt-2",children:"Pilih sesuai dengan kriteria kamu"})]}),e.jsx("div",{className:"pt-8 md:grid grid-cols-2 gap-4",children:e.jsx(m,{})})]})}),e.jsx(x,{})]})});export{f as default};