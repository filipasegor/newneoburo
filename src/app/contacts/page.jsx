import Image from 'next/image'
import Link from 'next/link'

import Headline from '../../components/typography/Headline/Headline'

export const metadata = {
  title: 'Контакты',
  description: 'Независимая оценка и экспертиза всех видов имущества',
}

export default function Contacts() {
  return (
    <main>
        <Headline>{metadata.title}</Headline>    
    </main>
  )
}