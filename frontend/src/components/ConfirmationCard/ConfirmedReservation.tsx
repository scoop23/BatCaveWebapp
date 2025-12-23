"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Reservations } from '../Rooms/RoomCard'
import dayjs from 'dayjs'
import CardLayout from './CardLayout'
import { apiPost } from '@/src/api/axios'
import { ReservationStatus } from '../Rooms/RoomCard'

interface ConfirmedReservationProps {
  reservationData: Reservations[] | null
}

export enum statusColorMap {
  Pending = 'bg-orange-500 text-white',
  Ongoing = 'bg-yellow-500 text-black',
  Completed = 'bg-green-600 text-white',
  'No-show' = 'bg-red-500 text-white',
  Cancelled = 'bg-gray-500 text-white'
}

const ConfirmedReservation: React.FC<ConfirmedReservationProps> = ({ reservationData }) => {
  const [reservations, setReservations] = useState<Reservations[] | null>(reservationData)

  useEffect(() => {
    setReservations(reservationData)
  }, [reservationData])

  const handleCancel = async (id: string) => {
    try {
      const response = await apiPost('/reservations-update', { id, status: 'Cancelled' })
      if (response?.data?.success) {
        setReservations(prev =>
          prev?.map(r => (r.id === id ? { ...r, status: 'Cancelled' as ReservationStatus } : r)) || null
        )
      }
    } catch (error) {
      console.error('Error cancelling reservation', error)
    }
  }

  
  const handleReserveAgain = async (id: string) => {
    try {
      // Delete from backend
      const response = await apiPost('/reservations-delete', { id });
    if (response?.data?.success) {
        // Remove from localStorage
        localStorage.removeItem('reservationData') // remove reservation data
        localStorage.removeItem('reservationId') // remove reservation data
        localStorage.removeItem('userId') // remove reservation data
        // Optionally remove it from frontend state
        setReservations(prev => prev?.filter(r => r.id !== id) || null);

        // Optionally redirect or reload
        window.location.reload();
      } else {
        console.error('Failed to delete reservation:', response?.data?.message);
      }
    } catch (error) {
      console.error('Error deleting reservation', error);
    }
  }

  const handle = () => {
    localStorage.clear()
  }

  return (
    <CardLayout>
      {reservations?.map((reservation, i) => {
        const { date, end, id, pax, roomId, start, status, type, userId, phone, userName } = reservation
        const formattedDate = dayjs(date).format('MMMM DD, YYYY')
        const exactDateStart = dayjs(`${date}T${start}`).format('h:mm A')
        const exactDateEnd = dayjs(`${date}T${end}`).format('h:mm A')
        const trimmedRoom = roomId.split('"')

        return (
          <div
            key={i}
            className="p-6 rounded-lg shadow-lg flex flex-col gap-4 max-w-[800px] w-full"
            style={{ backgroundColor: 'var(--color-coffee-dark)', borderLeft: '4px solid #D4A574' }}
          >
              <button onClick={() => handle()}>click here to reset user</button>
            <div
              className="mb-4 pb-4"
              style={{ background: 'var(--color-coffee-medium)', padding: '20px', borderRadius: '20px' }}
            >
              <div className="flex flex-col gap-2">
                {status === 'Completed' ? (
                  <>
                    <h3 className="text-xl font-bold text-green-100 mb-1">🎉 Thank You!</h3>
                    <p className="text-sm text-white">Your reservation has been completed.</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-orange-100 mb-1">☕ Your Reservation Confirmed</h3>
                    <p className="text-sm text-orange-300">
                      Welcome, <span className="font-semibold text-white">{userName}</span>
                    </p>
                  </>
                )}
              </div>
            </div>

            {status !== 'Completed' && (
              <div className="space-y-3 text-gray-100">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400">📅</span>
                  <div>
                    <p className="text-xs text-gray-400">Date</p>
                    <p className="font-medium">{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-400">🏠</span>
                  <div>
                    <p className="text-xs text-gray-400">Room</p>
                    <p className="font-medium">{trimmedRoom}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-400">👥</span>
                  <div>
                    <p className="text-xs text-gray-400">Pax</p>
                    <p className="font-medium">{pax} {pax === 1 ? 'person' : 'persons'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-400">⏰</span>
                  <div>
                    <p className="text-xs text-gray-400">Time</p>
                    <p className="font-medium">{exactDateStart} - {exactDateEnd}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-400">📞</span>
                  <div>
                    <p className="text-xs text-gray-400">Contact</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>
              </div>
            )}

            <div
              className="mt-4 pt-4 border-t border-orange-700 bg-opacity-50 p-3 rounded"
              style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)' }}
            >
              <p className="text-xs text-gray-400">Reservation ID</p>
              <p className="font-mono text-sm text-orange-300">{id}</p>
            </div>

            <div className="btns flex justify-between items-center mt-2">
              {status === 'Completed' ? (
                    <motion.button
                      onClick={() => handleReserveAgain(id)} // pass the reservation id here
                      className="w-fit p-4 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Reserve Again
                    </motion.button>
                  ) : (
                    <>
                      <motion.div
                        className={`w-fit p-4 rounded-lg text-sm font-semibold ${statusColorMap[status] || 'bg-gray-400 text-white'}`}
                      >
                        {status}
                      </motion.div>

                      {status !== 'Cancelled' && (
                        <motion.button
                          onClick={() => handleCancel(id)}
                          className="w-fit p-4 text-sm font-semibold bg-gradient-to-r from-amber-600 to-yellow-400 transform transition hover:scale-105 active:scale-95 tracking-wide rounded-lg"
                        >
                          Cancel
                        </motion.button>
                      )}
                    </>
                  )}
            </div>
          </div>
        )
      })}
    </CardLayout>
  )
}

export default ConfirmedReservation
