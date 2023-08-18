import Image from 'next/image'
import Link from 'next/link'

import Headline from '../../components/typography/Headline/Headline'

export const metadata = {
  title: 'Наши эксперты',
  description: 'Независимая оценка и экспертиза всех видов имущества',
}

export default function Team() {
  return (
    <main>
        <Headline>{metadata.title}</Headline>    
    </main>
  )
}