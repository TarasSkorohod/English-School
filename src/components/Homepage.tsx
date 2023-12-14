import PinDropIcon from '@mui/icons-material/PinDrop';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import PageFooter from '@/components/shared/PageFooter';
import ReactHookForm from '@/components/shared/ReactHookForm';

import { SITE_CONFIG } from '@/constants';

export default function Homepage({
  reactVersion = 'unknown',
  nextJsVersion = 'unknown',
}) {
  return (
    <main>
      <section>
        <Box sx={{ textAlign: 'center' }}>
          <PinDropIcon
            className='page-title'
            sx={{ width: '3rem', height: '3rem' }}
          />
          <Typography
            variant='h5'
            component='h1'
            gutterBottom
            className='page-title'
          >
            {SITE_CONFIG.title}
          </Typography>
          <Typography
            variant='subtitle2'
            gutterBottom
            className='page-subtitle'
          >
            {SITE_CONFIG.description}
          </Typography>

          <Typography
            variant='subtitle1'
            gutterBottom
            sx={{ color: 'green', mt: 3 }}
          >
            Отримання та кешування даних із 2 віддалених тестів API: <br />
            Остання версія React — {reactVersion}, а остання — NextJs
            версія {nextJsVersion}
            <Box sx={{ color: 'grey', fontSize: 10 }}>
              У середовищі розробника ви можете побачити, скільки часу це займає на консолі, напр.
              getApiResponse: 0,05 с
            </Box>
          </Typography>
          <Box sx={{ m: 5, a: { color: 'blue' } }}>
            <Link
              href='/api/test?from=github&nextjs=yes&mui=yes&tailwind=no'
              target='_blank'
            >
              Тестуйте локальний API NextJs /api/метод тестування GET із параметрами
            </Link>
          </Box>

          <Box sx={{ m: 5 }}>
            <h4>
              Перевірте локальний NextJs API /api/метод тестування POST зі змінними форми
            </h4>
            <ReactHookForm />
          </Box>

          <Box sx={{ m: 5 }}>
            <Link href='/test-page-not-exists'>
              Тестова сторінка 404 не знайдена (макетний файл не існує)

            </Link>
          </Box>
          <Box sx={{ m: 5 }}>
            <a href='/?slug=testError500'>
              Перевірте сторінку помилки 500 (імітована помилка на стороні сервера)
            </a>
          </Box>
        </Box>
      </section>
      <PageFooter />
    </main>
  );
}
