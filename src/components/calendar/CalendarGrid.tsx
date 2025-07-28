import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal } from 'lucide-react';

export function CalendarGrid() {
  const doctors = [
    { id: 1, name: 'Dr. Faizan Khan', image: '/public/DR Viviek Nair.png', initials: 'FK', appointmentCount: 42, weeklyNote: 'This week appointment' },
    { id: 2, name: 'Dr. Sneha Iyer', image: '/public/DR Viviek Nair.png', initials: 'SI', appointmentCount: 25, weeklyNote: "Today's appointment" },
    { id: 3, name: 'Dr. Priya Sharma', image: '/public/DR Viviek Nair.png', initials: 'PS', appointmentCount: 20, weeklyNote: "Today's appointment" },
    { id: 4, name: 'Dr. Vivek Nair', image: "/public/DR Viviek Nair.png", initials: 'VN', appointmentCount: 18, weeklyNote: "Today's appointment" },
    { id: 5, name: 'Dr. Arjun Malhotra', image: "/public/DR Viviek Nair.png", initials: 'AM', appointmentCount: 18, weeklyNote: "Today's appointment" }
  ];
const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

  const appointments = [
    // 08:00 appointments
    {
      id: 1,
      doctorId: 1,
      patientAvatar: "/public/DR Viviek Nair.png",
      timeSlot: '08:00',
      patientName: 'Emily Thompson',
      time: '08:00 AM - 09:00 AM',
      condition: 'Asthma',
      status: 'confirmed',
      color: 'bg-emerald-100'
    },
    {
      id: 2,
      doctorId: 2,
      patientAvatar: "/images/liam-johnson.jpg",
      timeSlot: '08:00',
      patientName: 'Liam Johnson',
      time: '08:00 AM - 09:00 AM',
      condition: 'Type 1 Diabetes',
      status: 'confirmed',
      color: 'bg-pink-100'
    },
    {
      id: 3,
      doctorId: 3,
      patientAvatar: "/images/charlotte-taylor.jpg",
      timeSlot: '08:00',
      patientName: 'Charlotte Taylor',
      time: '08:00 AM - 09:00 AM',
      condition: 'UTI',
      status: 'confirmed',
      color: 'bg-yellow-100'
    },
    {
      id: 4,
      doctorId: 4,
      patientAvatar: "/images/alexander-scott.jpg",
      timeSlot: '08:00',
      patientName: 'Alexander Scott',
      time: '08:00 AM - 09:00 AM',
      condition: 'Jamaica',
      status: 'confirmed',
      color: 'bg-blue-100'
    },
    {
      id: 5,
      doctorId: 5,
      patientAvatar: "/images/chloe-king.jpg",
      timeSlot: '08:00',
      patientName: 'Chloe King',
      time: '08:00 AM - 09:00 AM',
      condition: 'Tyra Tolkiena',
      status: 'confirmed',
      color: 'bg-purple-100'
    },

    // 09:00 appointments
    {
      id: 6,
      doctorId: 1,
      patientAvatar: "/images/jennie-moore.jpg",
      timeSlot: '09:00',
      patientName: 'Jennie Moore',
      time: '09:00 AM - 10:00 AM',
      condition: 'Croese Baa Pan',
      status: 'confirmed',
      color: 'bg-lime-100'
    },
    {
      id: 7,
      doctorId: 2,
      patientAvatar: "/images/james-moore.jpg",
      timeSlot: '09:00',
      patientName: 'James Moore',
      time: '09:00 AM - 10:00 AM',
      condition: 'Dexter',
      status: 'confirmed',
      color: 'bg-pink-100'
    },
    {
      id: 8,
      doctorId: 3,
      patientAvatar: "/images/grace-young.jpg",
      timeSlot: '09:00',
      patientName: 'Grace Young',
      time: '09:00 AM - 10:00 AM',
      condition: 'Riding Stores',
      status: 'confirmed',
      color: 'bg-amber-100'
    },
    {
      id: 9,
      doctorId: 4,
      patientAvatar: "/images/daniel-green.jpg",
      timeSlot: '09:00',
      patientName: 'Daniel Green',
      time: '09:00 AM - 10:00 AM',
      condition: 'Croese Baa Pan',
      status: 'confirmed',
      color: 'bg-cyan-100'
    },
    {
      id: 10,
      doctorId: 5,
      timeSlot: '09:00',
      patientName: 'Not Available',
      time: '',
      condition: '',
      status: 'blocked'
    },

    // 10:00 appointments
    {
      id: 11,
      doctorId: 1,
      patientAvatar: "/images/sophia-martinez.jpg",
      timeSlot: '10:00',
      patientName: 'Sophia Martinez',
      time: '10:00 AM - 11:00 AM',
      condition: 'Migraine',
      status: 'urgent'
    },
    {
      id: 12,
      doctorId: 2,
      patientAvatar: "/images/sophia-martinez.jpg",
      timeSlot: '10:00',
      patientName: 'Sophia Martinez',
      time: '10:00 AM - 11:00 AM',
      condition: 'Migraine',
      status: 'urgent'
    },
    {
      id: 13,
      doctorId: 3,
      patientAvatar: "/images/james-moore.jpg",
      timeSlot: '10:00',
      patientName: 'James Moore',
      time: '10:00 AM - 11:00 AM',
      condition: 'Chronic Back Pain',
      status: 'confirmed',
      color: 'bg-red-100'
    },
    {
      id: 14,
      doctorId: 4,
      patientAvatar: "/images/jack-wright.jpg",
      timeSlot: '10:00',
      patientName: 'Jack Wright',
      time: '10:00 AM - 11:00 AM',
      condition: 'Chickenpox',
      status: 'confirmed',
      color: 'bg-sky-100'
    },
    {
      id: 15,
      doctorId: 5,
      patientAvatar: "/images/matthew-baker.jpg",
      timeSlot: '10:00',
      patientName: 'Matthew Baker',
      time: '10:00 AM - 11:00 AM',
      condition: 'Pneumonia',
      status: 'confirmed',
      color: 'bg-rose-100'
    },

    // 11:00 appointments
    {
      id: 16,
      doctorId: 1,
      patientAvatar: "/images/ella-allen.jpg",
      timeSlot: '11:00',
      patientName: 'Ella Allen',
      time: '11:00 AM - 12:00 PM',
      condition: 'Stress Infection',
      status: 'confirmed',
      color: 'bg-orange-100'
    },
    {
      id: 17,
      doctorId: 2,
      patientAvatar: "/images/abigail-nelson.jpg",
      timeSlot: '11:00',
      patientName: 'Abigail Nelson',
      time: '11:00 AM - 12:00 PM',
      condition: 'Exzema',
      status: 'confirmed',
      color: 'bg-blue-100'
    },
    {
      id: 18,
      doctorId: 3,
      patientAvatar: "/images/oliver-davis.jpg",
      timeSlot: '11:00',
      patientName: 'Oliver Davis',
      time: '11:00 AM - 12:00 PM',
      condition: 'GEED (Acu Seluru)',
      status: 'confirmed',
      color: 'bg-fuchsia-100'
    },
    {
      id: 19,
      doctorId: 4,
      patientAvatar: "/images/isabella-anderson.jpg",
      timeSlot: '11:00',
      patientName: 'Isabella Anderson',
      time: '11:00 AM - 12:00 PM',
      condition: 'Depression',
      status: 'confirmed',
      color: 'bg-green-100'
    },
    {
      id: 20,
      doctorId: 5,
      patientAvatar: "/images/harper-walker.jpg",
      timeSlot: '11:00',
      patientName: 'Harper Walker',
      time: '11:00 AM - 12:00 PM',
      condition: 'Anxiety',
      status: 'confirmed',
      color: 'bg-lime-100'
    },

    // 12:00 appointments
    {
      id: 21,
      doctorId: 1,
      patientAvatar: "/images/henry-hall.jpg",
      timeSlot: '12:00',
      patientName: 'Henry Hall',
      time: '12:00 PM - 01:00 PM',
      condition: 'America',
      status: 'confirmed',
      color: 'bg-amber-100'
    },
    {
      id: 22,
      doctorId: 2,
      patientAvatar: "/images/aiden-mitchell.jpg",
      timeSlot: '12:00',
      patientName: 'Aiden Mitchell',
      time: '12:00 PM - 01:00 PM',
      condition: 'Gastroenteritis',
      status: 'confirmed',
      color: 'bg-cyan-100'
    }
  ];

  const [currentTimeTop, setCurrentTimeTop] = useState(-1000);
  const rowHeight = 80;

const updateTimelinePosition = () => {
  const fixedIndex = timeSlots.findIndex((slot) => slot === '12:00');
  const offset = 0; // you can add fine-tuning if needed
  setCurrentTimeTop(fixedIndex * rowHeight + offset);
};


  useEffect(() => {
    updateTimelinePosition();
    const interval = setInterval(updateTimelinePosition, 60000);
    return () => clearInterval(interval);
  }, []);

  const getAppointmentForSlot = (doctorId, timeSlot) =>
    appointments.find((apt) => apt.doctorId === doctorId && apt.timeSlot === timeSlot);

  const getAppointmentClassNames = (status, color) => {
    if (status === 'blocked') return 'bg-gray-100 border-gray-300 bg-stripes';
    if (status === 'urgent') return 'border-red-300 bg-red-100 bg-stripes';
    return `${color || 'bg-green-100'} border border-gray-300`;
  };

return (
  <div className="w-full overflow-x-auto mt-4 relative">
    <div className="min-w-[1200px] relative">
      {/* ✅ Timeline red line */}
      <div
        className="absolute left-[60px] w-[calc(100%-60px)] pointer-events-none z-50"
        style={{ top: `${currentTimeTop}px` }}
      >
        <div className="relative">
          <div className="absolute left-0 h-[2px] bg-red-500 w-full z-20" />
          <div className="absolute left-[-5px] top-[-5px] w-[10px] h-[10px] bg-red-500 rounded-full animate-pulse z-30 border-2 border-white" />
        </div>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-[60px_repeat(5,1fr)] gap-2 mb-2 min-h-[80px] items-stretch">
        <div className="flex items-end justify-start pl-2 pb-2">
          <p className="text-xs font-medium text-gray-500 uppercase">GMT</p>
        </div>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="text-center h-full">
            <div className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-200 h-full">
              <div className="flex items-center gap-2 overflow-hidden">
                <Avatar className="w-8 h-8 shrink-0">
                  {doctor.image ? (
                    <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                  ) : (
                    <AvatarFallback className="text-xs font-medium bg-gray-200 text-gray-700">
                      {doctor.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="text-left leading-tight truncate">
                  <p className="text-sm font-medium text-gray-800 truncate w-[120px]">{doctor.name}</p>
                  <p className="text-xs text-gray-500 truncate">{doctor.weeklyNote}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-base font-bold text-gray-800">{doctor.appointmentCount}</span>
                <MoreHorizontal className="w-4 h-4 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Grid */}
      <div className="space-y-2">
        {timeSlots.map((timeSlot) => (
          <div key={timeSlot} className="grid grid-cols-[60px_repeat(5,minmax(0,1fr))] gap-2 min-h-[80px] relative">
            <div className="flex items-center pl-2 text-sm font-medium text-gray-500">{timeSlot}</div>
            {doctors.map((doctor) => {
              const appointment = getAppointmentForSlot(doctor.id, timeSlot);
              return (
                <div key={doctor.id} className="min-h-[80px]">
                  {appointment ? (
                    <div className={`h-full rounded-md p-2 text-left ${getAppointmentClassNames(appointment.status, appointment.color)}`}>
                      {appointment.status === 'blocked' ? (
                        <div className="h-full flex items-center justify-center text-gray-500 text-sm">Not Available</div>
                      ) : (
                        <div className="h-full flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">{appointment.patientName}</p>
                              <p className="text-xs text-gray-500 truncate">{appointment.time}</p>
                            </div>
                            <MoreHorizontal className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="inline-block bg-white border border-gray-300 text-gray-800 text-xs font-medium px-2 py-0.5 rounded truncate max-w-[100px]">
                              {appointment.condition}
                            </span>
                            <div className="flex items-center gap-1">
                              <Avatar className="w-5 h-5">
                                <AvatarImage src="/public/doctor smith.jpg" />
                              </Avatar>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-full border border-dashed border-gray-300 rounded-md bg-gray-50" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
























