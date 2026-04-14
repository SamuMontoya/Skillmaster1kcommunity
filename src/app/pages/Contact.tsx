import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('¡Mensaje recibido!', {
      description: 'Gracias por contactarnos. Te responderemos pronto.'
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground">
            ¿Tienes preguntas o sugerencias? Nos encantaría escucharte
          </p>
        </div>

        {/* Contact Form */}
        <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Asunto *</Label>
              <Input
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="¿En qué podemos ayudarte?"
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escribe tu mensaje aquí..."
                className="bg-background/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            También puedes seguirnos en nuestras redes sociales
          </p>
        </div>
      </div>
    </div>
  );
}
