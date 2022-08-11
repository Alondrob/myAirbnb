import React from 'react'


const Card = ({value, key}) => {
  return (
      <div className=' max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-125 '>
          <img className= ' w-64 h-64' src={value.image} />
          <p className='h-16'>{value.title}</p>
      </div>
//       <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
  )
}

export default Card