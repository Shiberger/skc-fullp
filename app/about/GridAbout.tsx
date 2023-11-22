import React from "react";

function GridAbout() {
  return (
    <div className="">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-20">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          หลักสูตร
        </h2>
        <p className="mb-6 text-lg text-slate-500">
          สาขาวิชาที่เกี่ยวข้องเพื่อการนำไปพัฒนาต่อยอด
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 hoverZoom">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Program Development
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-slate-600">
                    สร้างนักสื่อสารทางด้านคอมพิวเตอร์
                    ที่มีความเชี่ยวชาญและชำนาญในยุคดิจิทัล
                    เพื่อตอบสนองทุกความต้องการในสังคมธุรกิจ
                    สามารถเชื่อมโยงแนวคิด ทางการเขียนโปรแกรมและศิลปะ
                    ไปสู่การพัฒนางาน ด้านคอมพิวเตอร์ที่ทันสมัย
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10 hoverZoom">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg " />
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Social Commnication
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-slate-600">
                    เน้นการปฏิบัติในการสร้างสรรค์งานออกแบบต่างๆ
                    เพื่อสามารต่อยอดในงานธุรกิจได้อย่างมืออาชีพ
                    สร้างกลยุทธ์ใหม่ๆ ด้านการสื่อสาร
                    เท่าทันสถานการณ์และบริบทของสังคม
                    ทั้งด้านทฤษฎีและปฏิบัติ พร้อมนำเสนอข้อมูล
                    อย่างสร้างสรรค์ผ่านกลยุทธ์และทฤษฎีที่ไม่เหมือนใคร
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 hoverZoom">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Film Production
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-slate-600">
                    สร้างผู้ที่มีความรู้ ความเชี่ยวชาญ ทั้งด้านการแสดง
                    และกำกับการแสดงภาพยนตร์ ประยุกต์และนำไปใช้ผ่านสื่อต่างๆ เช่น
                    ภาพถ่าย ภาพยนตร์ ซีรีย์ ละครโทรทัศน์ งานโฆษณา
                    รวมทั้งสื่อดิจิทัลอื่นๆ
                    ที่ร่วมสมัยผสมผสานศาสตร์-ความรู้ของศิลปะการแสดงและเทคโนโลยีดิจิทัล
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 hoverZoom">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Cyber Management
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-slate-600">
                    สร้างนักบริหารจัดการธุรกิจดิจิทัล ให้มีความรู้
                    ความเข้าใจธรรมชาติของธุรกิจออนไลน์ สร้างสรรค์
                    ต่อยอดธุรกิจบนแพลตฟอร์มต่างๆ ให้มีประสิทธิภาพสูงสุด
                    ด้วยเทคโนโลยีสารสนเทศ และอินเตอร์เน็ตที่มีอยู่ในปัจจุบัน
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10 hoverZoom">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-orange-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Multimedia Design 
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-orange-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-slate-600">
                  สร้างนักออกแบบที่ผสมผสานทักษะทางด้านศิลปะ
                    และความคิดสร้างสรรค์ ร่วมกับเทคโนโลยีการสื่อสาร
                    ผ่านการนำเสนอในรูปแบบงานสร้างสรรค์ภาพกราฟฟิก,อนิเมชั่น,
                    โมชั่นกราฟิก ตลอดจนสื่อที่สามารถมีปฏิสัมพันธ์กับผู้ใช้ เช่น
                    เว็บไซต์, E-book, เกม หรือ แอปพลิเคชันเพื่อการเรียนรู้ต่างๆ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridAbout;
