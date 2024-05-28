import React from 'react'
import SignupPage from '../components/SignUp'
import UserTable from '../components/UserTable'

export default function Users() {
  return (
    <div className='container-fluid'>
        <div className='row vh-100 justify-content-center p-5' >
            <div className='col-sm-12 col-md-12 col-lg-6 card p-4'>
                <h2 className='text-center mb-4'>Register User</h2>
                <div>
                    <SignupPage/>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 card p-4'>
                <h2 className='text-center mb-4'>Register Detail</h2>
                <div>
                    <UserTable/>
                </div>
            </div>
        </div>
    </div>
  )
}
