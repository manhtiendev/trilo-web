import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
        }}
      >
        <CardContent
          sx={{
            p: 1.5,
            '&:last-child': {
              p: 1.5,
            },
          }}
        >
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    );
  }
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset',
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image='https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/441425003_1505576647008156_6039512289038972252_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JePPQ4aIm7IQ7kNvgEJ-9Tb&_nc_ht=scontent.fhan18-1.fna&oh=03_Q7cD1QEqHm2WFxaUgQjs9JyZYR9ltjboe2K95aOrDXkHJaRqcA&oe=667918D7'
        title='green iguana'
      />
      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5,
          },
        }}
      >
        <Typography>Linh Cim Cháu nhụa</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size='small' startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size='small' startIcon={<CommentIcon />}>
          15
        </Button>
        <Button size='small' startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
