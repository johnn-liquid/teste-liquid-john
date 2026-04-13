"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Monitor, Bell, Shield, User, Globe, CreditCard } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3 pt-4 px-4 flex-row items-center gap-2">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-semibold">{title}</span>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 space-y-4">
        {children}
      </CardContent>
    </Card>
  )
}

function Row({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        {desc && <div className="text-xs text-muted-foreground">{desc}</div>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  )
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        "w-10 h-5.5 rounded-full relative transition-colors border",
        checked ? "bg-primary border-primary" : "bg-muted border-border"
      )}
      style={{ height: "22px", width: "40px" }}
    >
      <span
        className={cn(
          "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all",
          checked ? "left-5" : "left-0.5"
        )}
      />
    </button>
  )
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = React.useState({ email: true, push: true, alerts: true, reports: false })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <PageShell breadcrumb={<span className="text-sm font-medium">Settings</span>}>
      <div className="max-w-2xl">

        {/* Perfil */}
        <Section title="Perfil" icon={User}>
          <Row label="Nome">
            <Input defaultValue="Johnn Maia" className="w-48 h-8 text-sm" />
          </Row>
          <Row label="Email">
            <Input defaultValue="johnn@liquidOS.com" className="w-48 h-8 text-sm" />
          </Row>
          <Row label="Cargo">
            <Input defaultValue="Admin" className="w-48 h-8 text-sm" />
          </Row>
          <div className="flex justify-end">
            <Button size="sm">Salvar perfil</Button>
          </div>
        </Section>

        {/* Aparência */}
        <Section title="Aparência" icon={Monitor}>
          {mounted && (
            <Row label="Tema" desc="Escolha entre claro, escuro ou sistema">
              <div className="flex gap-1 border border-border rounded-lg p-1">
                {[
                  { value: "light",  icon: Sun,     label: "Claro"  },
                  { value: "dark",   icon: Moon,    label: "Escuro" },
                  { value: "system", icon: Monitor, label: "Sistema" },
                ].map(({ value, icon: Icon, label }) => (
                  <button
                    key={value}
                    onClick={() => setTheme(value)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors",
                      theme === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </Row>
          )}
          <Row label="Idioma" desc="Idioma da interface">
            <select className="h-8 px-3 text-sm rounded-md border border-border bg-background">
              <option>Português (BR)</option>
              <option>English</option>
            </select>
          </Row>
        </Section>

        {/* Notificações */}
        <Section title="Notificações" icon={Bell}>
          <Row label="Notificações por email" desc="Receber resumos por email">
            <Toggle checked={notifications.email} onChange={v => setNotifications(n => ({ ...n, email: v }))} />
          </Row>
          <Row label="Push notifications" desc="Notificações no navegador">
            <Toggle checked={notifications.push} onChange={v => setNotifications(n => ({ ...n, push: v }))} />
          </Row>
          <Row label="Alertas da Luri" desc="Avisos de contratos urgentes">
            <Toggle checked={notifications.alerts} onChange={v => setNotifications(n => ({ ...n, alerts: v }))} />
          </Row>
          <Row label="Relatórios semanais" desc="Resumo automático toda segunda-feira">
            <Toggle checked={notifications.reports} onChange={v => setNotifications(n => ({ ...n, reports: v }))} />
          </Row>
        </Section>

        {/* Segurança */}
        <Section title="Segurança" icon={Shield}>
          <Row label="Autenticação 2 fatores" desc="Verificação extra ao fazer login">
            <Button size="sm" variant="secondary">Configurar</Button>
          </Row>
          <Row label="Sessões ativas" desc="2 sessões em dispositivos">
            <Button size="sm" variant="outline">Ver sessões</Button>
          </Row>
          <Row label="Alterar senha">
            <Button size="sm" variant="outline">Alterar</Button>
          </Row>
        </Section>

        {/* Workspace */}
        <Section title="Workspace" icon={Globe}>
          <Row label="Nome do workspace" >
            <Input defaultValue="Liquid OS" className="w-48 h-8 text-sm" />
          </Row>
          <Row label="Plano" desc="Plano atual da conta">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Pro</span>
              <Button size="sm" variant="secondary">Upgrade</Button>
            </div>
          </Row>
        </Section>

        {/* Billing */}
        <Section title="Faturamento" icon={CreditCard}>
          <Row label="Próxima cobrança" desc="Renovação automática">
            <span className="text-sm font-medium">R$299 em 01/05/2026</span>
          </Row>
          <Row label="Método de pagamento" desc="Cartão terminando em 4242">
            <Button size="sm" variant="outline">Atualizar</Button>
          </Row>
        </Section>

      </div>
    </PageShell>
  )
}
