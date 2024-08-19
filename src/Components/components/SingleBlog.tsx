import React from 'react'

const SingleBlog = (name : string, email : string, comment : string, dateandtime : string) => {
  return (
    <div>
      <div className="mt-8 bg-white border border-gray-300 p-4 rounded shadow-sm">
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{email}</div>
          <div className="mt-2">{comment}</div>
          <div className="mt-2 text-xs text-gray-400">{dateandtime}</div>
          <button
            className="text-blue-500 mt-4"
          >
            Close
          </button>
        </div>
    </div>
  )
}

export default SingleBlog
