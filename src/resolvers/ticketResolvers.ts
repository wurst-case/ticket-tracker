import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Scalars, Ticket } from "../types/generated"

const TicketResolvers: IResolvers = {
  Query: {
    getTicket: async (
      _, 
      { ticketId }: {ticketId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket | undefined> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.ticketAPI.getTicket(ticketId)
    },
    getAllTickets: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      return await dataSources.ticketAPI.getAllTickets()
    },
    getTicketLog: async (
      _, 
      { ticketId }: {ticketId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.ticketAPI.getTicketLog(ticketId)
    },

  },
}

export default TicketResolvers