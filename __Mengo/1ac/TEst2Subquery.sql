SELECT District, Season, Sector, Site, COUNT(GroupID) AS GroupCount, SUM(ClientCount) AS ClientCount, SUM(GroupLandSize) AS TotalLandSize
FROM 
(
	SELECT ssnClients.GroupID, ssn.SeasonName AS Season, grp.SiteID, COUNT(ssnClients.ClientID) AS ClientCount, SUM(Acres) AS GroupLandSize
	FROM SeasonClients ssnClients
	LEFT JOIN  Seasons ssn ON ssn.SeasonID = ssnClients.SeasonID
	LEFT JOIN Clients clnt ON clnt.ClientID = ssnClients.ClientID
	LEFT JOIN SeasonClientInputChoices scic ON scic.SeasonId = ssn.SeasonId AND scic.ClientId = clnt.clientID
	LEFT JOIN Groups grp ON grp.GroupID = ssnClients.GroupID
	WHERE ssn.SeasonID = '80'
	AND ssnClients.Dropped = '0' 
	AND clnt.Deceased = '0'
	AND scic.Acres > '0'
	GROUP BY ssnClients.GroupID
) seasonInformation LEFT JOIN
(
	SELECT DistrictName AS District, SectorName AS Sector, SiteName AS Site, SiteID 
	FROM Sites ste 
	LEFT JOIN Sectors sctr ON sctr.SectorID = ste.SectorID
	LEFT JOIN Districts dst ON dst.DistrictID = sctr.DistrictID
) locationInformation  ON locationInformation.SiteID = seasonInformation .SiteID
GROUP BY seasonInformation.SiteID
ORDER BY Sector, Site 
