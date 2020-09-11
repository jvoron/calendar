export interface Task{

    id: number;
    date: Date;
    quantity: number;
    price: number;
    eventTypeName: string;
    isExpenseType: boolean;
    isHoursEventType: boolean;
    isAdditionalHoursEventType: boolean;
    isWorkHour: boolean;
    isApproved: boolean;
    isRejected: boolean;
    tasksCount: number;
    firstTaskStart: Date;
    lastTaskEnd: Date;
}