import { useEffect, useState } from 'react'

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (email && (!email.includes("@") || !email.includes("."))) {
      setError("Please enter a valid email.")
    } else {
      setError(null)
    }
  }, [email])
  const redirect = () => {
    window.location.href = "https://app.loch.one/welcome."
  }
  return (
    <div className='relative min-h-screen w-full grid grid-cols-10 max-w-[1440px] mx-auto'>
      <div className='w-full h-full col-span-10 md:col-span-6 bg-gradient-to-bl z-10 from-[#16151E] to-transparent flex flex-col space-y-[16px] p-12 relative'>
        <img src="/blue.svg" alt="" className='absolute w-full h-full top-0 left-0 -z-10' />
        <div className='flex gap-x-6'>
          <div className='flex flex-col gap-y-[16px] w-full max-w-[313px]'>
            <img src="/bell.svg" alt="" className='w-[32px] h-[32px]' />
            <h2 className='font-medium text-[31px] text-[#F2F2F2] stroke-[#000000] leading-9'>Get notified when a highly correlated whale makes a move</h2>
            <p className='text-[#F2F2F2] font-medium text-[16px]'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
          </div>
          <div className="overflow-x-scroll hide-scrollbar max-w-full flex gap-6 -mr-[48px]">
            <div className='bg-white p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] min-w-fit'>
              <p className='text-[9.1px] text-right font-semibold leading-[10.92px]'>save</p>
              <img src="/bell1.svg" alt="" className='w-[28px] h-[28px] absolute top-[-5px] left-[14px]' />
              <h2 className=' text-[14px] font-semibold leading-[16.8px]'>We&apos;ll be sending notifications to you here</h2>
              <input
                placeholder='hello@gmail.com'
                className='w-[161px] h-[35px] rounded-[5.6px] border-[0.7px] py-[8.4px] px-[11.2px] border-[#D4D4D4] flex items-center justify-center text-[13px] font-semibold text-[#19191A] outline-none' />

            </div>
            <div className='bg-white inline-flex flex-col justify-between p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] min-w-fit'>
              <p className='text-right'>
                <input type='checkbox' checked className='text-[9.1px] text-right w-[14px] h-[14px] rounded-[4.2px] text-[#0071E3]' />
              </p>
              <img src="/barchart2.svg" alt="" className='w-[28px] h-[28px] absolute top-[-5px] left-[14px]' />
              <div>
                <h2 className='text-[11.2px] font-medium  leading-[13.44px]'>Notify me when any wallets
                  move more than</h2>
                <div className='w-[66.4px] h-[19.6px] rounded-[2.8px] p-[4.2px] gap-[2.8px] bg-[#E5E5E6] flex items-center'>
                  <p className='text-[9.1px] font-medium leading-[10.92px]'>$1,000.00</p>
                  <img src="/triangledown.svg" alt="" className='w-[11.2px] h-[11.2px]' />
                </div>
              </div>

            </div>
            <div className='bg-white inline-flex flex-col justify-between p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] min-w-fit'>

              <p className='text-right'>
                <input type='checkbox' checked className='text-[9.1px] text-right w-[14px] h-[14px] rounded-[4.2px] text-[#0071E3]' />
              </p>
              <img src="/barchart2.svg" alt="" className='w-[28px] h-[28px] absolute top-[-5px] left-[14px]' />
              <div className='space-y-[4px]'>
                <h2 className='text-[11.2px] font-medium  leading-[13.44px]'>Notify me when any wallet dormant for</h2>
                <div className='w-[66.4px] h-[19.6px] rounded-[2.8px] p-[4.2px] gap-[2.8px] bg-[#E5E5E6] flex items-center'>
                  <p className='text-[9.1px] font-medium leading-[10.92px]'>&gt; 30 days</p>
                  <img src="/triangledown.svg" alt="" className='w-[11.2px] h-[11.2px]' />
                </div>
                <p className='text-[#19191A] text-[11.2px] leading-[13.4px] font-medium'>becomes active</p>
              </div>

            </div>

          </div>
        </div>
        <div className='flex justify-between'>
          <img src="/cohorts-1@2x.png" alt="" className='w-[335px] h-[306px]' />
          <div className='flex flex-col gap-y-[16px] w-full max-w-[313px] items-end '>
            <img src="/eye.svg" alt="" className='w-[32px] h-[32px]' />
            <h2 className='font-medium text-right text-[31px] text-[#F2F2F2] stroke-[#000000] leading-9'>Watch what the whales are doing</h2>
            <p className='text-[#F2F2F2] text-right font-medium text-[16px]'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
          </div>
        </div>
        <h5 className='ml-auto text-white text-[25px] font-medium'>Testimonials</h5>
        <div className='border-b border-b-[#E5E5E6]' />

        <div className='flex overflow-x-auto hide-scrollbar items-center  gap-5 -mr-[40px]'>
          <div className='absolute right-0 top-0 bg-gradient-to-l from-black/40 to-transparent w-[330px] h-full' />
          <img src="/vector.svg" alt="" className='w-[60px] h-[60px] absolute bottom-[60px] left-[60px]' />
          <div className=' gap-[20px] p-[20px] rounded-[12px] bg-white min-w-[353px]'>
            <h2 className='text-[16px] font-semibold leading-[19.2px] text-[#19191A]'>Jack F <span className='text-[#96979A] font-medium text-[13px] leading-[15.6px]'>Ex Blockrock PM</span></h2>
            <p className='font-medium text-[16px] leading-[19.2px] text-[#1D2129]'>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
          </div>
          <div className=' gap-[20px] p-[20px] rounded-[12px] bg-white min-w-[353px]'>
            <h2 className='text-[16px] font-semibold leading-[19.2px] text-[#19191A]'>Jack F <span className='text-[#96979A] font-medium text-[13px] leading-[15.6px]'>Ex Blockrock PM</span></h2>
            <p className='font-medium text-[16px] leading-[19.2px] text-[#1D2129]'>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
          </div>
          <div className=' gap-[20px] p-[20px] rounded-[12px] bg-white min-w-[353px]'>
            <h2 className='text-[16px] font-semibold leading-[19.2px] text-[#19191A]'>Jack F <span className='text-[#96979A] font-medium text-[13px] leading-[15.6px]'>Ex Blockrock PM</span></h2>
            <p className='font-medium text-[16px] leading-[19.2px] text-[#1D2129]'>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
          </div>
        </div>
      </div>
      <div className='h-full w-full col-span-10 md:col-span-4 bg-[#FFFFFF] flex flex-col items-center justify-center'>
        <div className='flex flex-col w-full max-w-[365px] mx-auto'>
          <h2 className='text-[#B0B1B3] font-medium text-[39px] mb-[10px]'>Sign up for <br /> exclusive access.</h2>
          <input
            className='bg-[#FFFFFF] border focus-within:outline-none shadow-[1px] stroke-[#e6e5e5] px-[24px] py-[20px] font-medium text-[16px] rounded-[8px]'
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email address' />
          {error ? error : null}
          <button onClick={redirect} className='bg-[#19191A] stroke-[#19191A] rounded-[8px] font-semibold py-[10px] text-[16px] mt-[10px] text-[#FFFFFF]'>Get Started</button>
          <p className='text-[#19191A] font-semibold py-[18px] px-[12px] mt-[12px]'>
            You&apos;ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
