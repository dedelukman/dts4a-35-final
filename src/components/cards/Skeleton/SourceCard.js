import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";

const SourceCard = () => (
  <Card sx={{ p: 2 }}>
    <List sx={{ py: 0 }}>
      <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
        <ListItemAvatar>
          <Skeleton
            variant="rectangular"
            width={30}
            height={30}
            sx={{ borderRadius: 2 }}
          />
        </ListItemAvatar>
        <ListItemText primary={<Skeleton variant="text" />} />
      </ListItem>
    </List>
  </Card>
);

export default SourceCard;
