// import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

// // Card bileşenine eklenmesi gereken prop'lar:
// // 1. Card'da aşağıdaki propları kullanarak dinamik yapı oluşturun:
// //    - username: Kullanıcı adı
// //    - avatarUrl: Kullanıcı avatarının URL'si
// //    - timestamp: Gönderi tarihi ve saati
// //    - content: Kartın içinde yer alacak metin içeriği
// // 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
// //    - Her bir kartın köşe kenarlarını (border-radius) farklı değerler ile test edin (örneğin: rounded-lg, rounded-xl, rounded-full).
// //    - Kullanıcının avatarının etrafına border ekleyin ve hover durumunda rengini değiştirin (örneğin: border-gray-300 hover:border-indigo-500).
// //    - Kartın içerik kısmına arka plan gradyanı ekleyin (örneğin: bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100).
// // 3. CardButton bileşenini düzenleyerek buton hover sırasında dönecek (rotate) şekilde animasyon ekleyin.

// function Card({ username }) {
//   return (
//     <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
//       <div class='bg-white sm:rounded-lg sm:shadow'>
//         <div className='px-4 py-5 sm:px-6'>
//           <div className='flex space-x-3'>
//             <div className='flex-shrink-0'>
//               <img
//                 className='h-10 w-10 rounded-full'
//                 src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//                 alt=''
//               />
//             </div>
//             <div className='min-w-0 flex-1'>
//               <p className='text-sm font-semibold text-gray-900'>
//                 <a href='#' className='hover:underline'>
//                   {username}
//                 </a>
//               </p>
//               <p className='text-sm text-gray-500'>
//                 <a href='#' className='hover:underline'>
//                   9 Aralık saat 11:43
//                 </a>
//               </p>
//             </div>
//             <CardButton />
//           </div>
//         </div>
//         <div class='px-4 pb-5 opacity-25 sm:p-6 sm:pt-0'>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
//             impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
//             quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
//             asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
//             distinctio veniam quam tempora modi aperiam nemo voluptate
//             reprehenderit quidem, nisi vero est.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// function CardButton() {
//   return (
//     <div className='flex flex-shrink-0 self-center'>
//       <div as='div' className='relative inline-block text-left'>
//         <div>
//           <div className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600'>
//             <span className='sr-only'>Açık opsiyonlar</span>
//             <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <div className='bg-gray-100'>
//       <Card username='Chelsea Hagon' />
//     </div>
//   )
// }

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function Card({ username, avatarUrl, timestamp, content }) {
  return (
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
      <div className='bg-white sm:rounded-lg sm:shadow'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex space-x-3'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full border border-gray-300 hover:border-indigo-500'
                src={avatarUrl}
                alt={`${username} Avatar`}
              />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-sm font-semibold text-gray-900'>
                <a href='#' className='hover:underline'>
                  {username}
                </a>
              </p>
              <p className='text-sm text-gray-500'>
                <a href='#' className='hover:underline'>
                  {timestamp}
                </a>
              </p>
            </div>
            <CardButton />
          </div>
        </div>
        <div className='px-4 pb-5 sm:p-6 sm:pt-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

function CardButton() {
  return (
    <div className='flex flex-shrink-0 self-center'>
      <div as='div' className='relative inline-block text-left'>
        <div>
          <div className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-transform'>
            <span className='sr-only'>Açık opsiyonlar</span>
            <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className='bg-gray-100'>
      <Card
        username='Chelsea Hagon'
        avatarUrl='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        timestamp='9 Aralık saat 11:43'
        content=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
             impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
             quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
             asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
             distinctio veniam quam tempora modi aperiam nemo voluptate
             reprehenderit quidem, nisi vero est.'
      />
    </div>
  )
}