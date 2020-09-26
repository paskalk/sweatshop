select clnt.FirstName, GroupName, SeasonName, Acres from SeasonClients ssnClients
left join  Seasons ssn on ssn.SeasonID = ssnClients.SeasonID
left join Clients clnt on clnt.ClientID = ssnClients.ClientID
left join SeasonClientInputChoices scic on scic.SeasonId = ssn.SeasonId and scic.ClientId = clnt.clientID
left join Groups grp on grp.GroupID = ssnClients.GroupID
left join Sites ste on ste.SiteID = grp.SiteID
left join Sectors sctr on sctr.SectorID = ste.SectorID
left join Districts dst on dst.DistrictID = sctr.DistrictID
--left join 

where ssn.SeasonID = '80'
and clnt.Deceased = '0'
and scic.Acres > 0
order by SectorName, SiteName